import React from 'react'
import './header.styles.scss'

import Navigation from '../nav/nav.component'
import { H1 } from '../typography/typography.component'
import SocialMedia from '../socialMedia/socialMedia.component'
import { useParallax } from 'react-scroll-parallax';

const Header = () => {
  const parallax = useParallax({ speed: 12 })
  const parallaxImg = useParallax({
    speed: -18,
    // scale: [1.05, 1, 'easeOutCubic'],
    translate: [0, 0]
})

  return (
    <header className='header'>
      <Navigation />

      <div className="header__img" ref={parallaxImg.ref}/>

      <div className="header__text" ref={parallax.ref}>
        <H1>
          <p className='heading1--sub' >
            Hola!! Humans of Internet 
          </p>
          Myself <span className="highlight">Aditya</span>,&nbsp; <br/>
          I&rsquo;m Freelance Developer 
          {/* I&rsquo;m Freelance Developer&nbsp;<br/>
          Turning Ideas Into <br/> Reality  */}
        </H1>
      </div>

      <SocialMedia className='header__social' />
    </header>
  )
}

export default Header