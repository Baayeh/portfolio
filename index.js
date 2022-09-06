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

const projectWrapper = document.querySelector('.project-list');
const projectArray = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque animi distinctio voluptate. Earum nulla ex, et blanditiis harum iure libero.',
    img: '',
    technologies: ['css', 'javascript', 'html'],
    linkDemo: '',
    sourceCode: '',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque animi distinctio voluptate. Earum nulla ex, et blanditiis harum iure libero.',
    img: '',
    technologies: ['css', 'javascript', 'html'],
    linkDemo: '',
    sourceCode: '',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque animi distinctio voluptate. Earum nulla ex, et blanditiis harum iure libero.',
    img: '',
    technologies: ['css', 'javascript', 'html'],
    linkDemo: '',
    sourceCode: '',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque animi distinctio voluptate. Earum nulla ex, et blanditiis harum iure libero.',
    img: '',
    technologies: ['css', 'javascript', 'html'],
    linkDemo: '',
    sourceCode: '',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque animi distinctio voluptate. Earum nulla ex, et blanditiis harum iure libero.',
    img: '',
    technologies: ['css', 'javascript', 'html'],
    linkDemo: '',
    sourceCode: '',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque animi distinctio voluptate. Earum nulla ex, et blanditiis harum iure libero.',
    img: '',
    technologies: ['css', 'javascript', 'html'],
    linkDemo: '',
    sourceCode: '',
  },
];
projectArray.forEach((project) => {
  let tech = '';
  project.technologies.forEach((item) => {
    tech += `<li class="pj-card-list-item">
    <span>${item}</span>
    </li>`;
  });
  const projectItem = `<div class="pj-card pj-2">
  <div class="pj-thumbnail"></div>
  <div class="pj-card-body">
      <h2 class="pj-card-title">${project.name}</h2>
      <ul class="pj-card-lists">
        ${tech}
      </ul>
      <button class="pj-card-action" type="button">See Project</button>
  </div>
  </div>`;
  projectWrapper.innerHTML += projectItem;
});