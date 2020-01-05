const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li, span');

  burger.addEventListener('click', () => {
    // toogle nav
    nav.classList.toggle('nav-active');

    // links animation
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    })

    // line animation

    burger.classList.toggle('on');
  });

}

navSlide();