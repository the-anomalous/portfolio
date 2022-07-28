import { useState, useEffect, useRef } from 'react'

const Preloader = () => {
  const [currentYear, setCurrentYear] = useState(2003)
  const [toggleClass, setToggleClass] = useState(false) 
  
  const taglineRef = useRef('i was born')
  const progressValueRef = useRef(0)

  useEffect(() => {
    const StopChangingYear = () => {
      clearInterval(changeYearInterval)
    }

    const setTagline = tagline => {
      taglineRef.current = tagline
    } 
  
    const changeYear = () => {
      progressValueRef.current = progressValueRef.current + 1

      setCurrentYear((previousYear) => {
        switch (previousYear) {
          case 2004: 
            return previousYear + 4
          case 2008:
            setTagline('got my first PC')
            return previousYear + 1;
          case 2010:
            setTagline('india lifts the world cup')
            return previousYear + 1;
          case 2011:
            return previousYear + 7;
          case 2018: 
            setTagline('started programming')
            return previousYear + 1;
          case 2019:
            setTagline('graduated from 10th grade')
            return previousYear + 1;
          case 2020:
            setTagline('got into web development')
            return previousYear + 1;
          case 2021:
            setTagline('started freelancing, and loved it')
            StopChangingYear()
            setToggleClass(true)
            return previousYear + 1;
          default:
            return previousYear + 1;
        }
      })
    }

    let changeYearInterval = null
    setTimeout(() => {
      changeYearInterval = setInterval(changeYear, 400)
    }, 700)
  }, [])

  return (
    <div className={`preloader ${toggleClass && 'preloader--hide'}`}>
      <div className={`preloader__box ${toggleClass && 'preloader__box--hide'}`}>
        <span className="preloader__year">    
          {currentYear}
        </span>

        <progress className="preloader__progress-bar" value={progressValueRef.current} max={10}/>

        <span className="preloader__tagline">
          {taglineRef.current}
        </span>
      </div>

      <div className={`preloader__welcome ${!toggleClass && 'preloader__welcome--hide'}`}>
        welcome
      </div>
    </div>
  )
}

export default Preloader