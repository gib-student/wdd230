// Put current date and time into the form
const date = new Date();
const month = date.getMonth();
const monthDay  = date.getDate();
const weekDay       = date.getDay();
const year      = date.getFullYear();
const dateTime = {
    "month": month, 
    "date": monthDay, 
    "year": year,
    "hours": date.getHours(),
    "minutes": date.getMinutes(),
    "seconds": date.getSeconds()
};
document.querySelector('.time-loaded').value = dateTime;

// Open thankyou.html when user submits
let sayThankYou = () => {
    window.open('https://gib-student.github.io/wdd230-Main/chamber/thankyou.html',
    '_blank');
};

document.querySelector('.join-submit-btn').addEventListener('click', 
    sayThankYou);

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

// Display current date
let dateElement = document.querySelector('#date');

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
'August', 'September', 'October','November','December'];
let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
dateElement.innerHTML = daysOfWeek[weekDay] + ', ' + monthDay + ' ' + months[month] + ' ' + year;
