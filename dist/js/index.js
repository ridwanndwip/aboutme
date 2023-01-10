const NavToggle = document.querySelector('.navbar_toggle input');
const navbar = document.querySelector('.navbar ul')

// function noscroll(){
//     window.scrollTo(0,0);
// }

NavToggle.addEventListener('click', function(){
    navbar.classList.toggle('seret');
   });