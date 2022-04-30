import React from 'react'
import './socialMedia.styles.scss'

import { socialIcons } from '../../assets/data'
import Icon from '../icons/icons.component'


const SocialMedia = ({className}) => {
  return (
    <div className={className} >
      {
        socialIcons.map(({ name, link }) =>
          <a
            href={link}
            target='_blank'
            rel="noreferrer"
            className={`${className}_link ${className}_link--${name}`}
            key={name}>
            <Icon className='icon' name={name} />
          </a>
        )
      }
    </div>
  )
}

export default SocialMedia