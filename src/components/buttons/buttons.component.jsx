import React from 'react'

export const BtnPrimary = ({children, className, link}) => {
  return (
    <a
      href={link}
      className={`btn btn__primary ${className}`}
      target='_blank'
      rel="noreferrer" >
      {children}
    </a>
  )
}

export const BtnSecondary = ({children, className, link}) => {
  return (
    <a
      href={link}
      className={`btn btn__secondary ${className}`}
      target='_blank'
      rel="noreferrer">
      {children}
    </a>
  )
}

export const BtnSubmit = ({ children, className }) => {
  return (
    <button
      type='submit'
      className={`btn btn__secondary ${className}`}>
      {children}
    </button>
  )
}