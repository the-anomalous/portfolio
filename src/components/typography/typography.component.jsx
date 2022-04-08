import React from 'react'
import './typography.styles.scss'

export const H1 = ({children}) => {
  return (
    <h1 className='heading1'>
      {children}
    </h1>
  )
}

export const H2 = ({children}) => {
  return (
    <h2 className='heading2'>
      {children}
    </h2>
  )
}

export const H3 = ({children}) => {
  return (
    <h3 className='heading3'>
      {children}
    </h3>
  )
}
