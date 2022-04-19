import React, { useRef, useEffect } from 'react'
import './about.styles.scss'

import { H2 } from '../typography/typography.component'
import Icon from '../icons/icons.component'
import appearOnScroll from '../../observers/appearOnScroll.observer'

const About = () => {
  const icons = ['react', 'firebase', 'javascript', 'sass']
  const aboutRef = useRef(null)

  useEffect(() => {
    appearOnScroll.observe(aboutRef.current)
  }, [aboutRef])
  

  return (
    <section className='about' id='about' ref={aboutRef}>
      <H2>
        a little more about me  
      </H2>

      <div className='about__text'>
        <p>
          Hey folks, I'm Aditya, a freelance web developer&nbsp;
          <span className="highlight">
            specializing in developing premium user interfaces using React.js. &nbsp;
          </span>
          I started web development back when the pandemic hit, very soon realized it was fun. What got me most excited about it was all the animations and interactions that I can bring to a website. 
        </p>
        <p>
          Fast forward to today,&nbsp;
          <span className="highlight">
            I'm working full-time as a freelance developer helping businesses to create better products for the web.&nbsp;
          </span>
           I'm constantly looking for more opportunities to grow as a developer and learn from others.
        </p>
          <p>
          That was a pretty typical intro I guess, well, in my spare time, I like listening to a podcast, or watching an anime.&nbsp;
          <span className="highlight">
            I'm currently working with javascript, react.js, and firebase,&nbsp;
          </span>
          and I'm highly motivated to learn more about the web.
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