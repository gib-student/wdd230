// Put current date and time into the form
const date = new Date();
const dateTime = {
    "month": date.getMonth(), 
    "date": date.getDate(), 
    "year": date.getFullYear(),
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