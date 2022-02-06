// Hamburger menu
const hambutton = document.querySelector('.hamburger');
const mainNav = document.querySelector('.link-list')

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

// Current date at top of page
dateElement = document.querySelector('#date');
month = date.getMonth();
monthDay = date.getDate();
weekDay = date.getDay();

months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
'August', 'September', 'October','November','December'];
daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
dateElement.innerHTML = daysOfWeek[weekDay] + ', ' + monthDay + ' ' + months[month] + ' ' + year;
