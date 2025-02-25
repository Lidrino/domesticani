// Сразу создаём переменные
let navbar = document.querySelector('.nav_bar').classList
let active_class = "navbar_scrolled"

/**
 * Слушаем событие прокрутки
 */
window.addEventListener('scroll', e => {
    console.log(scrollY)
  if(scrollY > 600) navbar.add(active_class)
  else navbar.remove(active_class)
})