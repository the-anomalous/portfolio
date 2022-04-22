const fadeIn = () => {
  let char = 0
  const words = document.querySelectorAll('.text')
  
  const complete = () => {
    clearInterval(timer)
  }
  
  const onTick = () => {
    const word = words[char];
    word.classList.add('fade');
    char++
    
    if (char === words.length) {
      complete()
    }
  }

  const timer = setInterval(onTick, 50)
}

export default fadeIn;