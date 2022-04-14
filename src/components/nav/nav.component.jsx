import React from 'react'
import './nav.styles.scss'

import { ReactComponent as Logo } from '../../assets/logo.svg'
import Menu from '../menu/menu.component'

const Navigation = () => {
  return (
    <nav className="nav">
      <figure className="nav__logo">
        <a href="#home">
          <Logo className='nav__img'/>
        </a>
      </figure> 

      {/* <Menu/> */}

      <ul className="nav__links">
        <li className="nav__links__item">
          <a href="#about" className='link' >About</a>
        </li>
        <li className="nav__links__item">
          <a href="#work" className='link' >Projects</a>
        </li>
        <li className="nav__links__item">
          <a href="#contact" className='link' >Contact</a>
        </li>
        <li className="nav__links__item">
          <a href="#resume" className='link'>Resume</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation