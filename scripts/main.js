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

  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

// Scrollreveal -> mostrar elementos com scroll da page
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#home .image, #home .text, #about .image, #about .text, #products header, #products .cards, #testimonials header, #testimonials .testimonials, #contact .text, #contact .contacts, footer .brand, footer .social`,
  { interval: 100 },
);

// Header scroll function
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
}

// Button back to top function
const btnToTop = document.querySelector('.back-to-top');
function backToTop() {
  if (window.scrollY >= 560) {
    btnToTop.classList.add('show');
  } else {
    btnToTop.classList.remove('show');
  }
}

// Menu ativo conforme seção visivel na page
const sections = document.querySelectorAll('main section[id]');
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active');
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active');
    }
  }
}

// Window when scroll
window.addEventListener('scroll', () => {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
});
