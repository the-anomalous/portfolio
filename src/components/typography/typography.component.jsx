import React from 'react'
import './typography.styles.scss'

export const H1 = ({children, className}) => {
  return (
    <h1 className={`heading1 ${className}`}>
      {children}
    </h1>
  )
}

export const H2 = ({children, className}) => {
  return (
    <h2 className={`heading2 ${className}`}>
      {children}
    </h2>
  )
}

export const H3 = ({children, className}) => {
  return (
    <h3 className={`heading3 ${className}`}>
      {children}
    </h3>
  )
}
