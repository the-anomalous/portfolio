import React from 'react'

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
          <a href={'https://drive.google.com/file/d/1f5oPkBmW5fPVi4odnIi_90RcC-xQdCji/view?usp=sharing'} className='link' target='_blank' rel="noreferrer">Resume</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation