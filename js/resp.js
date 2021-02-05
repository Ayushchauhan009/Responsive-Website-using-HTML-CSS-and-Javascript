burger = document.querySelector('.burger')
navbar = document.querySelector('.nav-bar')
rightNav = document.querySelector('.rightNav')
navList = document.querySelector('.nav-lists')

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp')
    navList.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
})