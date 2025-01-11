// Select DOM elements
const body = document.body;
const navMenu = document.querySelector('.menu-mobile');
const burgerMenu = document.querySelector('.burger-menu');
const menuItems = document.querySelectorAll('.menu-mobile li');
const imageSkillList = document.querySelectorAll('.skills-container .row .col-3 img')
const contactForm =  document.getElementById('contactForm');

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
    if (window.innerWidth <= 1025) {
        toggleMobileMenu();
    }
}

// Initialize event listeners
function initEventListeners() {
    burgerMenu.addEventListener('click', toggleMobileMenu);
    window.addEventListener('resize', updateMenuLayout);
    menuItems.forEach(item => item.addEventListener('click', handleMenuItemClick));
}

// Added delay for image animation
function addDelayAnimationImages(){
    imageSkillList.forEach((image, i ) => {
        const randomDelay = generateRandomNumber(0.5, 3.5);
        image.style.animationDelay = `${randomDelay}s`;
    })
}

// Generating a random number
function generateRandomNumber(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

// Inizialize EmailJs
function  initEmailJS(){
    emailjs.init("FoSYNKe0_5ndJU-w7");
}

// Send email
async function sendEmail(event){
    event.preventDefault();
    const formData = event.target.elements;
    const name = formData.name.value;
    const email = formData.email.value;
    const message = formData.message.value;

    const sendingStatus = document.createElement('p');
    sendingStatus.classList.add('yellow-gradient-text', 'm-0');
    sendingStatus.innerText = 'Sending...';
    contactForm.append(sendingStatus);

    try{
        await emailjs.send("service_ostfstp", "template_dwh8uzb", {
            from_name: name,
            from_email: email,
            message: message,
        });

        sendingStatus.innerText = "Message sent successfully! Thank you for getting in touch!";
        sendingStatus.classList.replace('yellow-gradient-text', 'text-green');
    } catch (e){
        sendingStatus.innerText = "Oops! Something went wrong. Please try again later.";
        sendingStatus.classList.replace('yellow-gradient-text', 'text-danger')
    }
}



// Initialization
function init() {
    updateMenuLayout();
    initEventListeners();
    addDelayAnimationImages();
    initEmailJS();

    contactForm.addEventListener('submit', async function(event) {
        await sendEmail(event);
    });
}

// Start the script
init();

