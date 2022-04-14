import React from 'react'
import './buttons.styles.scss'

import { Link } from 'react-router-dom'

export const BtnPrimary = ({children, className, link}) => {
  return (
    <a className={`btn btn__primary ${className}`} target='_blank' rel="noreferrer" href={link}>
      {children}
    </a>
  )
}

export const BtnSecondary = ({children, className, link}) => {
  return (
    <a className={`btn btn__secondary ${className}`} target='_blank' rel="noreferrer" href={link}>
      {children}
    </a>
  )
}

export const BtnTertiary = ({children, route}) => {
  return (
    <Link className='btn btn__tertiary' to={route}>
      {children}
    </Link>
  )
}

export const BtnSubmit = ({ children }) => {
  return (
    <button type='submit' onClick={(e) => e.preventDefault()} className='btn btn__secondary'>
      {children}
    </button>
  )
}