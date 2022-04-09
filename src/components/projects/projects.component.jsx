import React from 'react'
import './projects.styles.scss'

import { H2, H3 } from '../typography/typography.component'
import {BtnPrimary, BtnSecondary, BtnTertiary} from '../buttons/buttons.component'
import Icons from '../../assets/sprites.svg'

const Projects = () => {
  return (
    <main className='projects' id='projects'>
      <H2>
        things i&rsquo;ve built
      </H2>
      
      <div className="project">
        <div className="project__photos">
          <img src={require('../../assets/insta 1.JPG')} alt="feed" className="project__photo project__photo--1" />
          <img src={require('../../assets/insta 2.JPG')} alt="profile" className="project__photo project__photo--2" />
          <img src={require('../../assets/insta 3.JPG')} alt="profile" className="project__photo project__photo--3" />
        </div>
        
        <div className="project__details">
          <div className="project__name">
            <H3>
              Instagram Clone
            </H3>
            <div className="project__technologies">
              <span className="technology">React</span>
              <span className="technology">Firebase</span>
              <span className="technology">Tailwind CSS</span>
              <span className="technology">Context API</span>
              <span className="technology">Vercel</span>
            </div>
          </div>

          <div className="project__description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu ultricies consequat fermentum amet. Lacus volutpat maecenas egestas ornare pretium nisi fringilla lectus odio. A tortor turpis ut integer quisque dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          
          <div className="project__buttons">
            <BtnPrimary>
              <svg className='btn__primary__icon' >
                <use xlinkHref={`${Icons}#icon-external-link`} ></use>
              </svg>
              visit site
            </BtnPrimary>

            <BtnSecondary>
              <svg className='btn__secondary__icon' >
                <use xlinkHref={`${Icons}#icon-github`} ></use>
              </svg>
              view code
            </BtnSecondary>
          </div>
      </div>
      
      </div>
    </main>
  )
}

export default Projects