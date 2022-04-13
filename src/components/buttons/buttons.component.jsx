/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './buttons.styles.scss'

import { Link } from 'react-router-dom'

export const BtnPrimary = ({children, className}) => {
  return (
    <a className={`btn btn__primary ${className}`}>
      {children}
    </a>
  )
}

export const BtnSecondary = ({children, className}) => {
  return (
    <a className={`btn btn__secondary ${className}`}>
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