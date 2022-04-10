import React from 'react'
import './work.styles.scss'

import { H2 } from '../typography/typography.component'
import Project from '../project/project.component'
import data from '../../assets/data'

const Work = () => {
  return (
    <main className='work' id='work'>
      <H2>
        things i&rsquo;ve built
      </H2>

      {
        data.map(({ key, ...details }) => <Project key={key} details={details}/>)
      }
      
    </main>
  )
}

export default Work