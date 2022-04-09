/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './buttons.styles.scss'


export const BtnPrimary = ({children}) => {
  return (
    <a className='btn btn__primary'>
      {children}
    </a>
  )
}

export const BtnSecondary = ({children}) => {
  return (
    <a className='btn btn__secondary'>
      {children}
    </a>
  )
}

export const BtnTertiary = ({children}) => {
  return (
    <a className='btn btn__tertiary'>
      {children}
    </a>
  )
}
