const fadeIn = () => {
  let char = 0
  const words = document.querySelectorAll('.text'),
  ctaBtn = document.querySelector('.header__cta')
  
  const complete = () => {
    clearInterval(timer)
  }
  
  const onTick = () => {
    const word = words[char];
    word.classList.add('fade');
    char++
    
    if (char === words.length) {
      ctaBtn.classList.add('fade');
      complete()
    }
  }

  const timer = setInterval(onTick, 50) 
}

export default fadeIn;