import React from 'react'
import './form.styles.scss'

import { H2 } from '../typography/typography.component'
import { BtnSubmit } from '../buttons/buttons.component'

const Form = () => {
  return (
    <section className='contact' id='contact' >
      <H2>
        let&rsquo;s connect
      </H2>

      <form className="form">
        <div className="form__group form__name">
          <input type="text" className="form__input" id='name' placeholder='Name' required/>
          <label htmlFor="name" className="form__label">
            Name
          </label>
        </div>

        <div className="form__group form__email">
          <input type="email" className="form__input" id='email' placeholder='Email' required/>
          <label htmlFor="email" className="form__label">
            Email
          </label>

        </div>
        
        <div className="form__group form__subject">
          <input type="subject" className="form__input" id='subject' placeholder='Subject' required />
          <label htmlFor="subject" className="form__label">
            Subject
          </label>
        </div>

        <div className="form__group form__message">
          <textarea className="form__input form__textarea" id='messgae' placeholder='Message' required/>
          <label htmlFor="message" className="form__label">
            Message
          </label>
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