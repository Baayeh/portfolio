const openBtn = document.querySelector('#toggle-btn');
const closeBtn = document.querySelector('#close-btn');
const navList = document.querySelector('.nav-list');
const links = document.querySelectorAll('ul.nav-list li a');
const projectList = document.querySelector('.project-list');
const modalClose = document.querySelector('.modal_close');
const modalOverlay = document.querySelector('#proj-overlay');
const modalContent = document.querySelector('#modal_content');
const mainWrapper = document.querySelector('.main-wrapper');
const form = document.querySelector('#form');
const error = document.querySelector('#errorMessage');

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
    }, 400);
  });
});

const recentProjects = [
  {
    name: 'Devs Assemble Summit',
    description:
      'Devs Assemble is the first capstone project I built during my time at Microverse. The website comprises of a homepage, about page and a contact page. The Featured Speakers section on the homepage was injected dynamically using javascript',
    img: './assets/dev-summit.PNG',
    technologies: ['css', 'javascript', 'html'],
    linkDemo: 'https://baayeh.github.io/dev-summit/',
    sourceCode: 'https://github.com/Baayeh/dev-summit',
  },
  {
    name: 'Multi-Post Stories Gain+Glory2',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque animi distinctio voluptate. Earum nulla ex, et blanditiis harum iure libero.',
    img: './assets/dev-summit.PNG',
    technologies: ['css', 'javascript', 'html'],
    linkDemo: 'https://baayeh.github.io/portfolio/',
    sourceCode: 'https://github.com/Baayeh/portfolio',
  },
  {
    name: 'Multi-Post Stories Gain+Glory3',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque animi distinctio voluptate. Earum nulla ex, et blanditiis harum iure libero.',
    img: './assets/dev-summit.PNG',
    technologies: ['css', 'javascript', 'html'],
    linkDemo: 'https://baayeh.github.io/portfolio/',
    sourceCode: 'https://github.com/Baayeh/portfolio',
  },
  {
    name: 'Multi-Post Stories Gain+Glory4',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque animi distinctio voluptate. Earum nulla ex, et blanditiis harum iure libero.',
    img: './assets/dev-summit.PNG',
    technologies: ['css', 'javascript', 'html'],
    linkDemo: 'https://baayeh.github.io/portfolio/',
    sourceCode: 'https://github.com/Baayeh/portfolio',
  },
  {
    name: 'Multi-Post Stories Gain+Glory5',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque animi distinctio voluptate. Earum nulla ex, et blanditiis harum iure libero.',
    img: './assets/dev-summit.PNG',
    technologies: ['css', 'javascript', 'html'],
    linkDemo: 'https://baayeh.github.io/portfolio/',
    sourceCode: 'https://github.com/Baayeh/portfolio',
  },
  {
    name: 'Multi-Post Stories Gain+Glory6',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque animi distinctio voluptate. Earum nulla ex, et blanditiis harum iure libero.',
    img: './assets/dev-summit.PNG',
    technologies: ['css', 'javascript', 'html'],
    linkDemo: 'https://baayeh.github.io/portfolio/',
    sourceCode: 'https://github.com/Baayeh/portfolio',
  },
];

recentProjects.forEach((project, index) => {
  let technologies = '';
  project.technologies.forEach((technology) => {
    technologies += `<li class="pj-card-list-item">
          <span>${technology}</span>
      </li>`;
  });
  const projectItem = ` <div class="pj-card pj-1" id=${index}>
    <div class="img-container"><img class="pj-img" src="./assets/dev-summit.PNG" alt=""></div>
    <div class="pj-thumbnail"></div>
    <div class="pj-card-body">
        <h2 class="pj-card-title">${project.name}</h2>
        <ul class="pj-card-lists">
          ${technologies}
        </ul>
        <button class="pj-card-action" type="button">See Project</button>
    </div>
  </div>`;

  projectList.innerHTML += projectItem;
});
// console.log(typeof window.innerWidth);
const projectDetails = document.querySelectorAll('.pj-card-action');

// Modal Pop up
modalClose.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
  mainWrapper.style.filter = 'blur(0)';
});

const addModalContent = (projItem) => {
  let img = '';
  const windowWidth = window.innerWidth;
  if (windowWidth > 738) {
    img = `<img src=${projItem.img[0]} width="100%" alt="Image of the project on large screens">`;
  } else {
    img = `<img src=${projItem.img[1]} width="100%" alt="Image of the project on mobile devices">`;
  }

  let technologies = '';
  projItem.technologies.forEach((technology) => {
    technologies += `<li class="pj-tech-item">
    <span>${technology}</span>
</li>`;
  });
  const modDetail = `<div class="proj_img">
                      <img class="pj-img-modal" src="${projItem.img}">
                    </div>

                    <div class="content-info">
                      <h2 class="proj-name">${projItem.name}</h2>
                      <div class="content-info-btn">
                          <a href=${projItem.linkDemo} target="_blank" type="button" class="info-link">
                              <span>See live</span>
                              <span><img src="./assets/Icon-Export.svg" alt=""></span>
                          </a>
                          <a href=${projItem.sourceCode} target="_blank" type="button" class="info-link">
                              <span>See Source</span>
                              <span><img src="./assets/Icon-GitHub.svg" alt=""></span>
                          </a>
                      </div>
                      <ul class="pj-tech-lists">
                        ${technologies}
                      </ul>
                      <p class="proj-desc">${projItem.description}</p>
                    </div>`;
  modalContent.innerHTML = modDetail;
  modalOverlay.style.display = 'block';
  mainWrapper.style.filter = 'blur(14px)';
  modalContent.scrollTop = 0;
};

projectDetails.forEach((element) => {
  element.addEventListener('click', (e) => {
    const singleProj = e.target.parentElement.parentElement.getAttribute('id');
    const project = recentProjects[singleProj];
    addModalContent(project);
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { email } = form.elements;
  const emailToLowerCase = email.value.toLowerCase();
  if (email.value === emailToLowerCase) {
    form.submit();
    form.reset();
  } else {
    email.style.backgroundColor = '#ff000061';
    email.style.color = '#000';
    error.innerText = `Please input lower cases for email: ( ${emailToLowerCase} )`;
  }
});

const localData = localStorage.getItem('info');
const userData = JSON.parse(localData);

const userInfo = localData ? JSON.parse(localData) : { name: '', email: '', text: '' };
const { name, email, text } = form.elements;
if (userData) {
  name.value = userData.name;
  email.value = userData.email;
  text.value = userData.text;
}

form.addEventListener('change', (e) => {
  e.preventDefault();
  if (e.target.name === 'name') {
    userInfo.name = e.target.value;
  }
  if (e.target.name === 'email') {
    userInfo.email = e.target.value;
  }
  if (e.target.name === 'text') {
    userInfo.text = e.target.value;
  }

  const localStore = JSON.stringify(userInfo);
  localStorage.setItem('info', localStore);
});
