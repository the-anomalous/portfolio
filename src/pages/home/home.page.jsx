import React from 'react'
import './home.styles.scss'

import Header from '../../components/header/header.component'
import About from '../../components/about/about.component'
import Work from '../../components/work/work.component'

const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <Work/>
    </>
  )
}

export default HomePage 
