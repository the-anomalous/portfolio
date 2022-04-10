import React from 'react'
import Icons from '../../assets/sprites.svg'

const Icon = ({ className, name }) => {
  return (
    <svg className={className}>
      <use xlinkHref={`${Icons}#icon-${name}`}></use>
    </svg>
  )
}

export default Icon