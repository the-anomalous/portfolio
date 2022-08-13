import { useState } from 'react'

import emailjs from '@emailjs/browser';
import { BtnSubmit } from '../buttons/buttons.component'

const Form = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
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
      message: ""
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    setResolving(true)

    emailjs.send('service_lo4swod', 'template_05dpzj6', {
      from_subject: info.subject,
      to_name: "Aditya",
      from_name: info.name,
      message: info.message,
      reply_to: info.email,
    }, 'Eu5KMOJaMhO3jfCFn')
      .then(() => {
        clearForm()
        setSuccess(() => true)
        setTimeout(() => setSuccess(false), 1800)
      }).catch(() => {
        clearForm()
        setError(() => '*Could not submit the form')
        setTimeout(() => setError(''), 1800)
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
            placeholder='Name'
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
            placeholder='Email'
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
            name='message'
            placeholder='Message'
            value={info.message}
            onChange={handleChange}
            required />
          <label htmlFor="message" className="form__label">
            Message
          </label>
        </div>

        <div className="form__btn">
          <BtnSubmit className='form__submit btn__submit'>
            {
              resolving && <>sending <div className="loader"></div></>
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