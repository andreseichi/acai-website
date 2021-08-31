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

// header scroll
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});

// Swiper init
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
