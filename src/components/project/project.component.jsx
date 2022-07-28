import React, { useEffect, useRef } from 'react'

import { H3 } from '../typography/typography.component'
import { BtnPrimary, BtnSecondary } from '../buttons/buttons.component'
import Icon from '../icons/icons.component'

import appearOnScroll from '../../observers/appearOnScroll.observer'
import playOnFocus from '../../observers/playOnFocus.observer'

const Project = ({details}) => {
  const { name, description, technologies, appLink, githubLink, imgPath, videoPath } = details
  const projectRef = useRef()
  const videoRef = useRef()

  useEffect(() => {
    appearOnScroll.observe(projectRef.current)
    playOnFocus.observe(videoRef.current)
  }, [videoRef])

  return (
    <div className="project" ref={projectRef} >
      <div className="project__photos">
        <video
          poster={imgPath}
          className={`project__photo project__photo--1`}
          ref={videoRef}
          controls
          controlsList='nodownload'
          loop
          muted 
        >
          <source src={videoPath[0]} type='video/mp4' />
          <source src={videoPath[1]} type='video/webm' />
          Sorry, your browser doesn't support embedded videos.
        </video>
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