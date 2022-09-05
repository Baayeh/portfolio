const toggleBtn = document.querySelector('#toggle-btn');
const ulElem = document.querySelector('#list-items');

toggleBtn.addEventListener('click', () => {
  ulElem.style.display = 'block';
});

const closeButton = document.querySelector('#closeBtn');

closeButton.addEventListener('click', () => {
  ulElem.style.display = 'none';
});

const list = document.querySelectorAll('#list-items li a');

list.forEach((item) => {
  item.addEventListener('click', () => {
    ulElem.style.display = 'none';
  });
});
