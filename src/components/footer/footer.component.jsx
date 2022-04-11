import React from 'react'
import './footer.styles.scss'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import { H3 } from '../typography/typography.component'

const Footer = () => {
  return (
    <footer className='footer'>
      <figure className="footer__logo">
        <a href="#home">
          <Logo className='footer__img' />
        </a>
      </figure>
      <p className='footer__text'>
        designed and developed by aditya musale
      </p>
    </footer>
  )
}

export default Footer