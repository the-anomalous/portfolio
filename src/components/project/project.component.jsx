import React from 'react'
import './project.styles.scss'

import { H3 } from '../typography/typography.component'
import { BtnPrimary, BtnSecondary, BtnTertiary } from '../buttons/buttons.component'
import Icon from '../icons/icons.component'

const Project = ({details}) => {
  const {name, description, technologies, route, imgPath, appLink, githubLink } = details
  
  return (
    <div className="project">
      <div className="project__photos">
        {
          imgPath.map((img, index) => 
            <img src={require('../../assets/img/insta 1.png')} alt={`${name} ${index+1}`} className={`project__photo project__photo--${index+1}`} key={`${name} ${index+1}`} />
          )
        }
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
            <BtnTertiary route={route} >
              read more
            </BtnTertiary>
          </p>
        </div>

        <div className="project__buttons">
          <BtnPrimary link={appLink}>
            <Icon className='btn__primary__icon' name='external-link'/>
            visit site
          </BtnPrimary>

          <BtnSecondary link={githubLink}>
          <Icon className='btn__secondary__icon' name='github' />
            view code
          </BtnSecondary>
        </div>
      </div>

    </div>
  )
}

export default Project