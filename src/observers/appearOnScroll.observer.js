const options = {
  root: null,
  threshold: .2,
  rootMargin: '0px 0px -75px 0px'
};

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear')
    }

    appearOnScroll.unobserve(entry.target)
  })
}, options);

export default appearOnScroll;