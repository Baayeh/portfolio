const openBtn = document.querySelector('#toggle-btn');
const closeBtn = document.querySelector('#close-btn');
const navList = document.querySelector('.nav-list');
const links = document.querySelectorAll('ul.nav-list li a');

openBtn.addEventListener('click', () => {
  navList.style.left = '0';
});

closeBtn.addEventListener('click', () => {
  navList.style.left = '-25em';
});

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navList.style.left = '-25em';
    const href = link.getAttribute('href');
    const moveTop = document.querySelector(href).offsetTop;
    setTimeout(() => {
      window.scroll({
        top: moveTop,
        behavior: 'smooth',
      });
    }, 700);
  });
});
