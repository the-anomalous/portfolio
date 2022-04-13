import React from 'react'
import './project.styles.scss'

import Navigation from '../../components/nav/nav.component'
import { H1, H3 } from '../../components/typography/typography.component'
import {BtnPrimary, BtnSecondary} from '../../components/buttons/buttons.component'
import Icon from '../../components/icons/icons.component'

const ProjectPage = () => {
  return (
    <>
      <header className="project__header">
        <Navigation />
        <H1 className='project__heading1'>
          instagram clone
        </H1>
        <div className="project__preview">
          <H3 className='project__heading3' >
            project preview
          </H3>
          <p className='project__preview__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu ultricies consequat fermentum amet. Lacus volutpat maecenas egestas ornare pretium nisi fringilla lectus odio. A tortor turpis ut integer quisque dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
          <BtnPrimary className='project__btn-primary'>
            <Icon className='btn__primary__icon' name='external-link'/>
            visit site
          </BtnPrimary>
          <BtnSecondary className='project__btn-secondary'>
            <Icon className='btn__secondary__icon' name='github' />
            view code
          </BtnSecondary>
        </div>
      </header>
    </>
  )
}

export default ProjectPage