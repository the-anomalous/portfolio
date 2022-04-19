import React, { useRef, useEffect } from 'react'
import './work.styles.scss'

import { H2 } from '../typography/typography.component'
import Project from '../project/project.component'
import data from '../../assets/data'
import appearOnScroll from '../../observers/appearOnScroll.observer'

const Work = () => {
  const workRef = useRef()
  
  useEffect(() => {
    appearOnScroll.observe(workRef.current)
  }, [workRef])

  return (
    <main className='work' id='work' ref={workRef} >
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