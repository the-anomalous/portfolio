import React, { useState } from 'react'

import './menu.styles.scss'
import Icon from '../icons/icons.component'
import SocialMedia from '../socialMedia/socialMedia.component'
import Pdf from '../../assets/resume.pdf'

const Menu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)

  return (
    <div className='menu' >
      <figure className='menu__open' onClick={() => setIsMenuActive(!isMenuActive)}>
        <Icon name='open' className='menu__open--icon' />
      </figure>

      <div className={`menu__background ${isMenuActive && 'menu__background--active'} `}>
      </div>

      <div className={`menu__bar ${isMenuActive && 'menu__bar--active'}`}>
        <figure className="menu__close" onClick={() => setIsMenuActive(!isMenuActive)}>
          <Icon name='close' className='menu__close--icon' />
        </figure>

        <ul className="menu__items">
          <li className={`menu__link menu__link--about ${isMenuActive && 'menu__link--active'}`}>
            <a
              href="#about"
              className='link'
              onClick={() => setIsMenuActive(!isMenuActive)}>About</a>
          </li>
          <li className={`menu__link menu__link--projects ${isMenuActive && 'menu__link--active'}`}>
            <a
              href="#work"
              className='link'
              onClick={() => setIsMenuActive(!isMenuActive)}>Projects</a>
          </li>
          <li className={`menu__link menu__link--contact ${isMenuActive && 'menu__link--active'}`}>
            <a
              href="#contact"
              className='link'
              onClick={() => setIsMenuActive(!isMenuActive)}>Contact</a>
          </li>
          <li className={`menu__link menu__link--resume ${isMenuActive && 'menu__link--active'}`}>
            <a
              href={Pdf}
              className='link'
              target='_blank'
              rel="noreferrer"
              onClick={() => setIsMenuActive(!isMenuActive)}>Resume</a>
          </li>
        </ul>

        <div className="menu__contact">
          <SocialMedia className='menu__social' />
          <p className="menu__email">
            adityamusale4477@gmail.com
          </p>
        </div>
      </div>

    </div>
  )
}

export default Menu