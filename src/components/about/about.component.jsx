import React from 'react'
import './about.styles.scss'

import { H2 } from '../typography/typography.component'

const About = () => {
  return (
    <section className='about'>
      <H2>
        a little more about me  
      </H2>
      <div className='about__text'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor viverra lacinia quam consectetur. Aliquam nunc, id volutpat tristique turpis felis duis aliquam. Tellus orci vulputate augue dignissim diam id massa. Lobortis diam dui amet erat nisl consectetur posuere velit. 
        </p>
        <p>
          Nisl feugiat dignissim urna, ullamcorper ullamcorper metus, aliquet. Amet enim hac turpis vehicula sem quis vel.
        </p>
        <p>
          Urna porttitor a facilisis vitae, eu laoreet odio curabitur. Egestas cras mauris pellentesque nunc fringilla a diam. Purus imperdiet consequat enim commodo consectetur.
        </p>
      </div>
      <div className="about__icons">

      </div>
    </section>
  )
}

export default About