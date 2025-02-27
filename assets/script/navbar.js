// Cоздаём переменные
let navbar = document.querySelector(".nav_bar").classList

let nav_a = document.querySelectorAll(".nav_a")
let active_class = "navbar_scrolled"


/* Слушаем событие прокрутки */
window.addEventListener("scroll",function(){
    let y = this.scrollY;
    if(y>600){
      navbar.add("navbar_scrolled")
        for(let item of nav_a) {
            item.classList.add("nav_a_scrolled")
        }
    }
    else{
      navbar.remove("navbar_scrolled")
        for(let item of nav_a) {
            item.classList.remove("nav_a_scrolled")
        }
    }
})