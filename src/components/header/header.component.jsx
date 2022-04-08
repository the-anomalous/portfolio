import React from 'react'
import './header.styles.scss'

import Navigation from '../nav/nav.component'
import { H1 } from '../typography/typography.component'

const Header = () => {
  return (
    <header className='header'>
      <Navigation />
      
      <div className="header__text">
        <H1>
          <p className='heading1--sub' >
            Hola!! Humans of Internet, Myself <span className="highlight">Aditya</span>
          </p>
          I&rsquo;m Freelance Developer Turning Your Ideas Into Reality
        </H1>
      </div>
    </header>
  )
}

export default Header