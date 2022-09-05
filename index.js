let toggleBtn = document.querySelector('#toggle-btn')
let ulElem = document.querySelector('#list-items')

toggleBtn.addEventListener('click', () => {
  ulElem.style.display = "block"
})

let closeButton = document.querySelector('#closeBtn')

closeButton.addEventListener('click', () => {
  ulElem.style.display = "none";
})

let list = document.querySelectorAll('#list-items li a')

list.forEach(item => {
  item.addEventListener('click', () => {
    ulElem.style.display = "none";
  })
})
