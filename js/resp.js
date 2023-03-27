navbar = document.querySelector('.navbar') 
nav_list = document.querySelector('.nav-list')
burger = document.querySelector('.burger')
right_nav = document.querySelector('.right-nav')

 burger.addEventListener('click', ()=>{
    right_nav.classList.toggle('nav-v');
    nav_list.classList.toggle('nav-v');
    navbar.classList.toggle('nav-h');


 })
 