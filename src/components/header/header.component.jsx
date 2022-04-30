import { useEffect } from 'react'
import './header.styles.scss'

import Navigation from '../nav/nav.component'
import { H1 } from '../typography/typography.component'
import SocialMedia from '../socialMedia/socialMedia.component'
import { useParallax } from 'react-scroll-parallax';

import fadeIn from '../../animations/fadeIn'

const Header = () => {
  const parallax = useParallax({ speed: 12 })
  const parallaxImg = useParallax({
    speed: -18,
    translate: [0, 0],
  })

  useEffect(() => {
    fadeIn()
  }, [])

  return (
    <header className='header' id='home' >
      <Navigation />

      <div className="header__img" ref={parallaxImg.ref}/>

      <div className="header__text" ref={parallax.ref}>
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
      </div>

      <SocialMedia className='header__social' />
    </header>
  )
}

export default Header