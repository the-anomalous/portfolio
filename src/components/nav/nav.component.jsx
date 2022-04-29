import React from 'react'
import './nav.styles.scss'

import Menu from '../menu/menu.component'
import Icon from '../icons/icons.component'

const Navigation = () => {
  return (
    <nav className="nav">
      <figure className="nav__logo">
        <a href="#home">
          <Icon className='nav__img' name='logo' />
        </a>
      </figure> 

      <Menu/>

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
          <a href="./../../assets/Resume.pdf" className='link' target='_blank' type='application/pdf' >Resume</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation