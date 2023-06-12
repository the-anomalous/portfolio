import { useState } from 'react'

import { BtnSubmit } from '../buttons/buttons.component'

const Form = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    subject: "",
    text: ""
  })

  const [error, setError] = useState('')
  const [resolving, setResolving] = useState(false)
  const [success, setSuccess] = useState(false) 

  const handleChange = ({ target }) => {
    setInfo(prevInfo => {
      return { ...prevInfo, [target.name]: target.value }
    })
  }

  const clearForm = () => {
    setResolving(() => false)
    setInfo({
      name: "",
      email: "",
      subject: "",
      text: ""
    })
  }

  const onSuccess = () => {
    setSuccess(() => true)
    clearForm()
    setTimeout(() => setSuccess(false), 2200)
  }

  const onError = () => {
    setError(() => '*Could not submit the form')
    clearForm()
    setTimeout(() => setError(''), 2000)
  }

  const onSubmit = async e => {
    e.preventDefault()
    setResolving(true)

    await fetch('.netlify/functions/api/submit', {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(async res => {  
      if (res.status !== 200) {
        onError()
        return
      }
      const mailStatus = await res.json()
      
      if (mailStatus.status === 'success' && res.status === 200) {
        onSuccess()
      } else if (mailStatus.status === 'error') {
        onError()
      }
    
    }).catch(err => {
      if (err) { onError() }
    })
  }

  return (
    <>
      <div className="form__cta">
        Think I’m the perfect fit for your project? <br />
        Just send me a message!!
      </div>

      <div className="form__error">
        {error}
      </div>

      <form className="form" onSubmit={onSubmit}>
        <div className="form__group form__name">
          <input
            type="text"
            className="form__input"
            id='name'
            name='name'
            placeholder='Your Name'
            value={info.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name" className="form__label">
            Name
          </label>
        </div>

        <div className="form__group form__email">
          <input
            type="email"
            className="form__input"
            id='email'
            name='email'
            placeholder='Your Email'
            value={info.email}
            onChange={handleChange}
            required />
          <label htmlFor="email" className="form__label">
            Email
          </label>
        </div>

        <div className="form__group form__subject">
          <input
            type="subject"
            className="form__input"
            id='subject'
            name='subject'
            placeholder='Subject'
            value={info.subject}
            onChange={handleChange}
            required />
          <label htmlFor="subject" className="form__label">
            Subject
          </label>
        </div>

        <div className="form__group form__message">
          <textarea
            className="form__input form__textarea"
            id='message'
            name='text'
            placeholder='Message'
            value={info.text}
            onChange={handleChange}
            required />
          <label htmlFor="message" className="form__label">
            Message
          </label>
        </div>

        <div className="form__btn">
          <BtnSubmit className='form__submit btn__submit'>
            {
              resolving && <><div className="loader"></div></>
            } {
              success && 'sent'
            } {
              !resolving && !success ? 'send message' : null
            }
          </BtnSubmit>
        </div>
      </form>
    </>
  )
}

export default Form