const nav = document.querySelector('#header nav');
const toggles = document.querySelectorAll('nav .toggle');

const links = document.querySelectorAll('nav ul li a');

for (const toggle of toggles) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
}

// Swiper init
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: true,
});

// Scrollreveal -> mostrar elementos com scroll da page
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#home .image, #home .text, #about .image, #about .text, #products header, #products .card, #testimonials header, #testimonials .testimonials, #contact .text, #contact .contacts, footer .brand, footer .social`,
  { interval: 100 },
);

// Header scroll function
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header');
  const navHeight = header.offsetHeight;

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
}

// Button back to top function
function backToTop() {
  const btnToTop = document.querySelector('.back-to-top');

  if (window.scrollY >= 560) {
    btnToTop.classList.add('show');
  } else {
    btnToTop.classList.remove('show');
  }
}

// Window when scroll
window.addEventListener('scroll', () => {
  changeHeaderWhenScroll();
  backToTop();
});
