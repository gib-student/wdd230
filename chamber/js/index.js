const hambutton = document.querySelector('.hamburger');
const mainNav = document.querySelector('.top-bar-nav')

hambutton.addEventListener('click', () => 
    {mainNav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {
    if (window.innerWidth > 760)
    {
        mainNav.classList.remove()
    }
};

// Footer year and last modified update
const date = new Date();
const year = date.getFullYear();
const lastModified = document.lastModified;

document.querySelector('#copyrightYear').innerHTML = year;
document.querySelector('#modified').innerHTML = lastModified;