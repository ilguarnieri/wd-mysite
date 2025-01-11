const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.menu-mobile');
const body = document.querySelector('body');
const menuItems = document.querySelectorAll('.menu-mobile li');


burgerMenu.addEventListener('click', function(){
  burgerMenu.classList.toggle('open');
  navMenu.classList.toggle('show');
  body.classList.toggle('overflow-hidden');
})

// Control Windows Width
function checkWindowWidth() {
  if (window.innerWidth > 1025) {
    burgerMenu.classList.remove('open');
    navMenu.classList.remove('menu-mobile', 'show');
    navMenu.classList.add('menu-desktop');
  }else {
    navMenu.classList.add('menu-mobile');
    navMenu.classList.remove('menu-desktop');
  }
}

checkWindowWidth();

// Event listener Window Update
window.addEventListener("resize", checkWindowWidth);

// event listener menu items and add class active
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        menuItems.forEach(el => el.classList.remove('active'));
        this.classList.add('active');
        burgerMenu.click();
    });
});
