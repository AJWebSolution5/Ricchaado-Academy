
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const home = document.querySelector('.nav-links li:first-child');
    const courses = document.querySelector('.nav-links li:nth-child(3)');
    const contact = document.querySelector('.nav-links li:nth-child(4)');
//Toggle nav
    
[ burger, courses, home, contact ].forEach(function(element) {
    element.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        //Animate links

    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }

    });
    //Burger animation
    burger.classList.toggle('toggle');


    });
 });
   
        

}
navSlide();

//Scroll Reveal
/* window.sr = ScrollReveal();
var x = window.matchMedia('(max-width: 450px');
sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 500
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 800
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
}); */