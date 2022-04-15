import React from 'react'
import './socialMedia.styles.scss'

import { socialIcons } from '../../assets/data'
import Icon from '../icons/icons.component'


const SocialMedia = ({className}) => {
  return (
    <div className={className} >
      {
        socialIcons.map(({ name, link }) =>
          <a href={link} className={`${className}_link ${className}_link--${name}`} target='_blank' rel="noreferrer" key={name}>
            <Icon className='icon' name={name} />
          </a>
        )
      }
    </div>
  )
}

export default SocialMedia