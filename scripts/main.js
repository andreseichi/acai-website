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
