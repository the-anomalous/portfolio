import React from 'react'
import './home.styles.scss'

import Header from '../../components/header/header.component'
import About from '../../components/about/about.component'
import Projects from '../../components/projects/projects.component'

const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <Projects/>
    </>
  )
}

export default HomePage 
