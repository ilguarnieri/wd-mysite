// Select DOM elements
const body = document.body;
const navMenu = document.querySelector('.menu-mobile');
const burgerMenu = document.querySelector('.burger-menu');
const menuItems = document.querySelectorAll('.menu-mobile li');

// Handle window width changes
function updateMenuLayout() {
    if (window.innerWidth > 1025) {
        resetMobileMenu();
        navMenu.classList.replace('menu-mobile', 'menu-desktop');
    } else {
        navMenu.classList.replace('menu-desktop', 'menu-mobile');
    }
}

// Reset the mobile menu state
function resetMobileMenu() {
    burgerMenu.classList.remove('open');
    navMenu.classList.remove('show');
    body.classList.remove('overflow-hidden');
}

// Toggle the mobile menu
function toggleMobileMenu() {
    burgerMenu.classList.toggle('open');
    navMenu.classList.toggle('show');
    body.classList.toggle('overflow-hidden');
}

// Handle menu item activation
function handleMenuItemClick() {
    menuItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
    toggleMobileMenu();
}

// Initialize event listeners
function initEventListeners() {
    burgerMenu.addEventListener('click', toggleMobileMenu);
    window.addEventListener('resize', updateMenuLayout);
    menuItems.forEach(item => item.addEventListener('click', handleMenuItemClick));
}

// Initialization
function init() {
    updateMenuLayout();
    initEventListeners();
}

// Start the script
init();
