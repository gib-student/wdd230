// Create directors' contacts
fetch('https://raw.githubusercontent.com/gib-student/wdd230-Main/main/chamber/data/data.json')
    .then(response => response.json())
    .then (data => {
        makeCards(data);
        makeList(data);
    });

const imgFilepath = business.image;
        if (imgFilepath != '') {
            const imageUrl = 'https://raw.githubusercontent.com/gib-student/wdd230-Main/main/chamber/images/directory/' + imgFilepath.toString();
            (async () => {
                const response = await fetch(imageUrl);
                const imageBlob = await response.blob();
                const reader = new FileReader();
                reader.readAsDataURL(imageBlob);
                reader.onloadend = () => {
                  const base64data = reader.result;
                  img.src = base64data;
                };
              })();
        }

// Image lazy loading
const images = document.querySelectorAll('[data-src]'); 
const options = { threshold: [.5] } 
function preloadImage(img) { 
    const source = img.getAttribute('data-src'); 
    img.src = source; 
} 
const io = new IntersectionObserver( (entries, io) => {
     entries.forEach(entry => {
        if(!entry.isIntersecting){ 
            return; 
        } 
        else { 
            preloadImage(entry.target); //call a function send in the image that is currently intersecting 
            io.unobserve(entry.target); 
        } 
    }); 
}, options); 
images.forEach(images => { io.observe(images); });

// Date at the top
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const monthDay = date.getDate();
const weekDay = date.getDay();

let dateElement = document.querySelector('#date');

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
'August', 'September', 'October','November','December'];
let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
dateElement.innerHTML = daysOfWeek[weekDay] + ', ' + monthDay + ' ' + months[month] + ' ' + year;

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

