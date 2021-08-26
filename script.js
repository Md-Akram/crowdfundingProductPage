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
const getStarted = document.querySelector('#GetStarted')

modalOpener.addEventListener('click', () => {
  modal.style.display = 'block'
})

getStarted.addEventListener('click', () => {
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

//adding selected class

const radio0 = document.querySelector('#radio')
const radio1 = document.querySelector('#radio1')
const radio2 = document.querySelector('#radio2')

const radios = [radio0, radio1, radio2]

radios.forEach((radio) => {
  radio.addEventListener('click', () => {
    radios.forEach((r) => {
      const inputRow = r.parentNode
      const modalInput = inputRow.parentNode
      selectedRemover(modalInput)
    })
    const inputRow = radio.parentNode
    const modalInput = inputRow.parentNode
    selectedAdder(modalInput)
  })
})

function selectedAdder(div) {
  div.classList.add('selected')
}
function selectedRemover(div) {
  div.classList.remove('selected')
}

//success-modal

const continueBtn = document.querySelectorAll('.continue')
const successModal = document.querySelector('.success-modal')

continueBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.style.display = 'none'
    successModal.style.display = 'block'
  })
})

const gotIt = document.querySelector('.got-it')

gotIt.addEventListener('click', () => {
  successModal.style.display = 'none'
})
