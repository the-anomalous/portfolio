const options = {
  root: null,
  threshold: 0.8,
  rootMargin: '0px 0px 20px 0px'
}

const playOnFocus = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.play()
    } else {
      entry.target.pause()
    }
  })
}, options)

export default playOnFocus;