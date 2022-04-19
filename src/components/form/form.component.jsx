import React, { useRef, useEffect } from 'react'
import './form.styles.scss'

import { useForm, ValidationError } from '@formspree/react';
import { H2 } from '../typography/typography.component'
import { BtnSubmit } from '../buttons/buttons.component'
import appearOnScroll from '../../observers/appearOnScroll.observer'

const Form = () => {
  const [state, handleSubmit] = useForm("mqknyjnb");
  const formRef = useRef()
  
  useEffect(() => {
    appearOnScroll.observe(formRef.current)
  }, [formRef])

  console.log(state);

  return (
    <section className='contact' id='contact' ref={formRef} >
      <H2>
        let&rsquo;s connect
      </H2>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form__group form__name">
          <input type="text" className="form__input" id='name' name='name' placeholder='Name' required/>
          <label htmlFor="name" className="form__label">
            Name
          </label>
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />
        </div>

        <div className="form__group form__email">
          <input type="email" className="form__input" id='email' name='email' placeholder='Email' required/>
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        
        <div className="form__group form__subject">
          <input type="subject" className="form__input" id='subject' name='subject' placeholder='Subject' required />
          <label htmlFor="subject" className="form__label">
            Subject
          </label>
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
        </div>

        <div className="form__group form__message">
          <textarea className="form__input form__textarea" id='messgae' name='message' placeholder='Message' required/>
          <label htmlFor="message" className="form__label">
            Message
          </label>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        
        <div className="form__btn">
          <BtnSubmit>
            Send Message
          </BtnSubmit>
        </div>
      </form>

    </section>
  )
}

export default Form