import React from 'react'
import './footer.styles.scss'

import SocialMedia from '../socialMedia/socialMedia.component'
import Icon from '../icons/icons.component'

const Footer = () => {
  return (
    <footer className='footer'>
      <figure className="footer__logo">
        <a href="#home">
          <Icon name='logo' className='footer__img' />
        </a>
      </figure>
      <p className='footer__text'>
        designed and developed by aditya musale <br/>
        <span className="footer__email">adityamusale4477@gmail.com</span>  
      </p>
      <SocialMedia className='footer__social' />
    </footer>
  )
}

export default Footer