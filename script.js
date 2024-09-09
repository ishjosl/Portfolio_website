//smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
        });
    })
})

//mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () =>{
    navMenu.classList.toggle('active');
});

//lightbox for Images
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');

document.querySelectorAll('.portfolio-image').forEach(Image => {
    Image.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImage.src= image.src;
    });
});

//close lightbox
lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});
