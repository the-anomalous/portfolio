import React, { useRef, useEffect } from 'react'

import { H2 } from '../typography/typography.component'
import appearOnScroll from '../../observers/appearOnScroll.observer'
import Form from '../form/form.component'

const Contact = () => {
  const contactRef = useRef()

  useEffect(() => {
    appearOnScroll.observe(contactRef.current)
  }, [contactRef])

  return (
    <section className='contact' id='contact' ref={contactRef}>
      <H2>
        let&rsquo;s connect
      </H2>

      <Form />
    </section>
  )
}

export default Contact