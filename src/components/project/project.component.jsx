import React from 'react'
import './project.styles.scss'

import { H3 } from '../typography/typography.component'
import { BtnPrimary, BtnSecondary, BtnTertiary } from '../buttons/buttons.component'
import Icons from '../../assets/sprites.svg'
import Icon from '../icons/icons.component'

const Project = ({details}) => {
  const {name, description, technologies} = details

  return (
    <div className="project">
      <div className="project__photos">
        <img src={require('../../assets/insta 1.JPG')} alt="feed" className="project__photo project__photo--1" />
        <img src={require('../../assets/insta 2.JPG')} alt="profile" className="project__photo project__photo--2" />
        <img src={require('../../assets/insta 3.JPG')} alt="profile" className="project__photo project__photo--3" />
      </div>

      <div className="project__details">
        <div className="project__name">
          <H3>
            {name}
          </H3>
          <div className="project__technologies">
            {
              technologies.map((item) => 
                <span key={technologies.indexOf(item)} className='technology'>{ item }</span>
              )
            }
          </div>
        </div>

        <div className="project__description">
          <p>
            {description}
            <BtnTertiary>
              read more
            </BtnTertiary>
          </p>
        </div>

        <div className="project__buttons">
          <BtnPrimary>
            <Icon className='btn__primary__icon' name='external-link'/>
            visit site
          </BtnPrimary>

          <BtnSecondary>
          <Icon className='btn__secondary__icon' name='github' />
            view code
          </BtnSecondary>
        </div>
      </div>

    </div>
  )
}

export default Project