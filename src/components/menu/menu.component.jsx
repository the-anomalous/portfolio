import React, { useState } from 'react'

import Icon from '../icons/icons.component'
import SocialMedia from '../socialMedia/socialMedia.component'

const Menu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)

  return (
    <div className='menu' >
      <div className='menu__btn' onClick={() => setIsMenuActive(!isMenuActive)}>
        <figure className={`menu__open ${isMenuActive && 'menu__open--active'} `} >
          <Icon name='open' className='menu__open--icon' />
        </figure>

        <figure className={`menu__close ${isMenuActive && 'menu__close--active'} `} >
          <Icon name='close' className='menu__close--icon' />
        </figure>
      </div>

      <div className={`menu__background ${isMenuActive && 'menu__background--active'} `}>
      </div>

      <div className={`menu__bar ${isMenuActive && 'menu__bar--active'}`}>
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
              href={'https://drive.google.com/file/d/1f5oPkBmW5fPVi4odnIi_90RcC-xQdCji/view?usp=sharing'}
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