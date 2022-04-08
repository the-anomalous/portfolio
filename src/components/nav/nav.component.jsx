/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import './nav.styles.scss'

const Navigation = () => {
  return (
    <nav className="nav">
      <figure className="nav__logo">
        <a href="#home">
          <Logo className='nav__img'/>
        </a>
      </figure>

      <ul className="nav__links">
        <li className="nav__links__item">
          <a href="#about" className='link' >About</a>
        </li>
        <li className="nav__links__item">
          <a href="#projects">Projects</a>
        </li>
        <li className="nav__links__item">
          <a href="#contact">Contact</a>
        </li>
        <li className="nav__links__item">
          <a href="#">Resume</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation