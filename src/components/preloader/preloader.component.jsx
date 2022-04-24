import { useState, useEffect, useRef } from 'react'
import './preloader.styles.scss'


const Preloader = () => {
  const [currentYear, setYear] = useState(2003)
  const [toggle, setToggle] = useState(false) 

  const textRef = useRef('i was born')
  const widthRef = useRef(0)

  useEffect(() => {
    const complete = () => {
      clearInterval(timer)
    }
    
    const changeYear = () => {
      widthRef.current = widthRef.current + 1

      setYear((previousYear) => {
        switch (previousYear) {
          case 2008:
            textRef.current = 'graduated from 1st grade'
            return previousYear + 1;
          case 2010:
            textRef.current = 'india lifts the world cup'
            return previousYear + 1;
          case 2018: 
            textRef.current = 'started programming'
            return previousYear + 1;
          case 2019:
            textRef.current = 'graduated from 10th grade'
            return previousYear + 1;
          case 2020:
            textRef.current = 'got into web development'
            return previousYear + 1;
          case 2021:
            textRef.current = 'started freelancing, and loved it'
            complete()
            setToggle(true)
            return previousYear + 1;
          default:
            return previousYear + 1;
        }
      })
    }

    const timer = setInterval(changeYear, 500)
  }, [])

  return (
    <div className='preloader'>
      <div className={`preloader__box ${toggle && 'preloader__hide'}`}>
        <span className="preloader__year">    
          {currentYear}
        </span>

        <progress className="preloader__progress-bar" value={widthRef.current} max={19}/>

        <span className="preloader__text">
          {textRef.current}
        </span>
      </div>

      <div className={`preloader__welcome ${!toggle && 'preloader__hide'}`}>
        welcome
      </div>
    </div>
  )
}

export default Preloader