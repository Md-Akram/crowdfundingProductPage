// mobile-menu start

const menuHam = document.querySelector('.menu-ham')
const nav = document.querySelector('.nav')

menuHam.addEventListener('click', () => {
  if (menuHam.attributes.src.value === 'images/icon-hamburger.svg') {
    menuHam.attributes.src.value = 'images/icon-close-menu.svg'
    nav.style.visibility = 'visible'
  } else {
    menuHam.attributes.src.value = 'images/icon-hamburger.svg'
    nav.style.visibility = 'hidden'
  }
})

// mobile-menu end

// modal start

const modalOpener = document.querySelector('#modal-opener')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('#modal-close')

modalOpener.addEventListener('click', () => {
  modal.style.display = 'block'
})

modalClose.addEventListener('click', () => {
  modal.style.display = 'none'
})

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none'
  }
}

function selectedAdder(div) {
  div.classList.add('selected')
}
