import React, { useState } from 'react'

import './menu.styles.scss'
import Icon from '../icons/icons.component'
import SocialMedia from '../socialMedia/socialMedia.component'
import Pdf from '../../assets/resume.pdf'

const Menu = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='menu' >
      <figure className='menu__open' onClick={() => setToggle(!toggle)}>
        <Icon name='open' className='menu__open--icon' />
      </figure>

      <div className={`menu__background ${toggle ? 'menu__background--active' : ''} `}>
      </div>

      <div className={`menu__bar ${toggle ? 'menu__bar--active' : ''}`}>
        <figure className="menu__close" onClick={() => setToggle(!toggle)}>
          <Icon name='close' className='menu__close--icon' />
        </figure>

        <ul className="menu__items">
          <li className={`menu__link menu__link--about ${toggle ? 'menu__link--active' : ''}`}>
            <a href="#about" className='link' onClick={() => setToggle(!toggle)}>About</a>
          </li>
          <li className={`menu__link menu__link--projects ${toggle ? 'menu__link--active' : ''}`}>
            <a href="#work" className='link' onClick={() => setToggle(!toggle)}>Projects</a>
          </li>
          <li className={`menu__link menu__link--contact ${toggle ? 'menu__link--active' : ''}`}>
            <a href="#contact" className='link' onClick={() => setToggle(!toggle)}>Contact</a>
          </li>
          <li className={`menu__link menu__link--resume ${toggle ? 'menu__link--active' : ''}`}>
            <a href={Pdf} className='link' target='_blank' onClick={() => setToggle(!toggle)} rel="noreferrer">Resume</a>
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