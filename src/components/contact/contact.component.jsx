import React, { useRef, useEffect, useState } from 'react'
import './contact.styles.scss'

import { H2 } from '../typography/typography.component'
import { BtnSubmit } from '../buttons/buttons.component'
import appearOnScroll from '../../observers/appearOnScroll.observer'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [error, setError] = useState('')
  const [resolving, setResolving] = useState(false)
  const [success, setSuccess] = useState(false)

  const formRef = useRef()

  useEffect(() => {
    appearOnScroll.observe(formRef.current)
  }, [formRef])

  const handleChange = ({ target }) => {
    setInfo(prevInfo => {
      return {...prevInfo, [target.name]: target.value}
    } )
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
    }, 'Eu5KMOJaMhO3jfCFn').then((response) => {
      setResolving(() => false)
      setInfo({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
      setSuccess(() => true)
      setTimeout(() => setSuccess(false), 1800)
    }).catch((err) => {
      setResolving(() => false)
      setInfo({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
      setError(() => '*Could not submit the form')
      setTimeout(() => setError(''), 1800)
    })
  }

  return (
    <section className='contact' id='contact' ref={formRef}>
      <H2>
        let&rsquo;s connect
      </H2>

      <div className="contact__error">
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

    </section>
  )
}

export default Contact