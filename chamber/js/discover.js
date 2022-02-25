// Progressive loading of images
let imagesToLoad = document.querySelectorAll('img[data-src]');
console.log("imagesToLoad: " + String(imagesToLoad))
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onLoad = () => {
        image.removeAttribute('data-src');
    };
};
imagesToLoad.forEach((img) => {
    loadImages(img);
});

// Use local storage to calculate days between last time accessed
// Get date data
let date = new Date()
let lastDateStr    = localStorage.getItem("lastDate");
let lastMonthStr   = localStorage.getItem("lastMonth");
let lastYearStr    = localStorage.getItem("lastYear");
// Check if the client has ever visited this page
visited = (lastDateStr != null || lastMonthStr != null || lastYearStr != null);
if (!visited) {
    console.log("not visited")
    // Store date information
    lastDateStr     = date.getDate().toString();
    lastMonthStr    = date.getMonth().toString();
    lastYearStr     = date.getFullYear().toString();    
    localStorage.setItem("lastDate", lastDateStr);
    localStorage.setItem("lastMonth", lastMonthStr);
    localStorage.setItem("lastYear", lastYearStr);
}
// Compare last accessed time to current date
// Convert strings to numbers
let lastDateInt     = parseInt(lastDateStr);
let lastMonthInt    = parseInt(lastMonthStr);
let lastYearInt     = parseInt(lastYearStr);
// Get today's date
let d = date.getDate();
let m = date.getMonth();
let y = date.getFullYear();
// Compare
let currentSeconds  = Date.UTC(y, m, d)
let lastSeconds     = Date.UTC(lastYearInt, lastMonthInt, lastDateInt)
let difDays = (currentSeconds - lastSeconds) / (1000 * 60 * 60 * 24)
// Change html
if (difDays > 0) {
    document.querySelector('.last-accessed-value').innerHTML = difDays.toString()
}
else {
    document.querySelector('.last-accessed-value').innerHTML = "0"
}
// Store data in local storage
localStorage.setItem("lastDate", d.toString());
localStorage.setItem("lastMonth", m.toString());
localStorage.setItem("lastYear", y.toString());
