import React from 'react'
import './about.styles.scss'
import Icons from '../../assets/sprites.svg'

import { H2 } from '../typography/typography.component'
import Icon from '../icons/icons.component'

const About = () => {
  const icons = ['react', 'firebase', 'javascript', 'sass']

  return (
    <section className='about' id='about'>
      <H2>
        a little more about me  
      </H2>
      <div className='about__text'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor viverra lacinia quam consectetur. Aliquam nunc, id volutpat tristique <span className="highlight">
            turpis felis duis aliquam. Tellus orci vulputate augue dignissim diamid&nbsp;
          </span>
           massa.Lobortis diam dui amet erat nisl consectetur posuere velit. 
        </p>
        <p>
          <span className="highlight">
            Nisl feugiat dignissim urna, ullamcorper ullamcorper metus&nbsp;
          </span>
          , aliquet. Amet enim hac turpis vehicula sem quis vel.
        </p>
        <p>
          Urna porttitor a facilisis vitae, eu laoreet odio curabitur.
          <span className="highlight">
            Egestas cras mauris pellentesque nunc fringilla a diam.&nbsp;
          </span>
           Purus imperdiet consequat enim commodo consectetur.
        </p>
      </div>
      <div className="about__icons">
        {
          icons.map((name, index) =>
            <Icon
              className={`about__icon about__icons--${index + 1}`}
              key={name}
              name={name} />)
        }
      </div>
    </section>
  )
}

export default About