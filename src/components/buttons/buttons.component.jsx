import React from 'react'
import './buttons.styles.scss'

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
    <a className='btn btn__tertiary' href={route}>
      {children}
    </a>
  )
}

export const BtnSubmit = ({ children }) => {
  return (
    <button type='submit' onClick={(e) => e.preventDefault()} className='btn btn__secondary'>
      {children}
    </button>
  )
}