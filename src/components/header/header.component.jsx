import React from 'react'
import './header.styles.scss'

import Navigation from '../nav/nav.component'
import { H1 } from '../typography/typography.component'
import Icon from '../icons/icons.component'

const Header = () => {
  const icons = ['twitter', 'github', 'linkedin', 'instagram']

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

      <div className="social">
        {
          icons.map((name, index) =>
            <a href="#" className={`social__link social__link__icon--${index+1}`}>
              <Icon className='social__link__icon' name={name} key={name} />
            </a>
          )
        }
      </div>
    </header>
  )
}

export default Header