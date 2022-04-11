import React from 'react'
import './home.styles.scss'

import Header from '../../components/header/header.component'
import About from '../../components/about/about.component'
import Work from '../../components/work/work.component'
import Form from '../../components/form/form.component'
import Footer from '../../components/footer/footer.component'

const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <Work />
      <Form />
      <Footer/>
    </>
  )
}

export default HomePage 
