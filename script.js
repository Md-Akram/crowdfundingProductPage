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
