import { useEffect } from 'react'

import Navigation from '../nav/nav.component'
import { H1 } from '../typography/typography.component'
import SocialMedia from '../socialMedia/socialMedia.component'
import {BtnSecondary} from '../buttons/buttons.component'

import fadeIn from '../../animations/fadeIn'

const Header = () => {
  useEffect(() => {
    fadeIn()
  }, [])

  return (
    <header className='header' id='home' >
      <Navigation />

      <div className="header__img" />
  
      <div className="header__text">
        <H1>
          <p className='heading1--sub' >
            {
              'Hola!! Humans of Internet'.split('').map((word, index) => {
                return <span className='text' key={index+1} >{word}</span>
              })
            } 
          </p>
          {
            'Myself'.split('').map((word, index) => {
              return <span className='text' key={word + index + 1} >{word}</span>
            })
          } {
            'Aditya,'.split('').map((word, index) => {
              if (word === ',') {
                return <span className='text' key={word + index + 1} >{word}</span>  
              } else {
                return <span className='highlight text' key={word + index + 1} >{word}</span>
              }
            })
          } <br />
          {
            "I'm Freelance Developer".split('').map((word, index) => {
              return <span className='text' key={word + index + 1} >{word}</span>
            })
          } 
        </H1>
        <div className="header__cta"> 
          <BtnSecondary
            className='header__cta__btn'
            link={'https://www.upwork.com/freelancers/~01bbf467bd897115b1'}
          >
            Hire Me!!
          </BtnSecondary>
        </div>
      </div>

      <SocialMedia className='header__social' />
    </header>
  )
}

export default Header