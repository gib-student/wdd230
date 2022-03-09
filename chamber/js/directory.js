// Constants
const cardsBox  = document.querySelector('.bus-cards-box');
const listBox   = document.querySelector('.bus-list-box');

// Get the business information data
fetch('https://raw.githubusercontent.com/gib-student/wdd230-Main/main/chamber/data/data.json')
    .then(response => response.json())
    .then (data => {
        makeCards(data);
        makeList(data);
    });

function makeCards(busData) {
    // Make all the cards in HTML
    let cardNum = 0;
    for (let key in busData) {
        cardNum += 1;
        const business = busData[key];

        // Make all the elements
        const card      = document.createElement('div');
        const img       = document.createElement('img');
        const infoBox   = document.createElement('div');
        const name      = document.createElement('p');
        const nameB     = document.createElement('b');
        const address   = document.createElement('p');
        const phone     = document.createElement('p');
        const URL       = document.createElement('p');
        const URLLink   = document.createElement('a');

        // Add classes
        card.classList  .add("card");
        img.classList   .add("bus-logo");
        infoBox.classList.add('info-box');
        URLLink.classList.add("bus-link");

        // Add content
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
        img.alt             = business.name + " logo";
        nameB.innerHTML     = business.name;
        address.innerHTML   = business.address;
        phone.innerHTML     = business.phone;
        URLLink.href        = business.website;
        URLLink.innerHTML   = "Website";

        // Append children to parents
        name    .appendChild(nameB);
        URL     .appendChild(URLLink);
        infoBox .appendChild(name);
        infoBox .appendChild(address);
        infoBox .appendChild(phone);
        infoBox .appendChild(URL);
        card    .appendChild(img);
        card    .appendChild(infoBox);
        cardsBox.appendChild(card);
    }
}

function makeList(busData) {
    // Make all the list items in HTML
    let cardNum = 0;
    for (let key in busData) {
        cardNum += 1;
        const business = busData[key];

        // Make the list item
        const div = document.createElement('div');
        div.className = "bus-li";

        // Make business info elements
        const name      = document.createElement('p');
        const nameB     = document.createElement('b');
        const address   = document.createElement('p');
        const phone     = document.createElement('p');
        const URL       = document.createElement('p');
        const URLLink   = document.createElement('a');
        URLLink.classList   .add("bus-link");
        nameB.innerHTML     = business.name;
        address.innerHTML   = business.address;
        phone.innerHTML     = business.phone;
        URLLink.href        = business.website;
        URLLink.innerHTML   = "Website";

        // Append children to their parents
        name.appendChild(nameB);
        URL.appendChild(URLLink);

        div.appendChild(name);
        div.appendChild(address);
        div.appendChild(phone);
        div.appendChild(URL);

        // Append list item to list
        listBox.appendChild(div);
    }
}

// Display view style depending on the viewport
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const mediumView    = (vw >= 800 && vw < 1000);

if (mediumView) {
    cardsBox.style.display  = 'none';
    listBox.style.display   = 'block';
}

// Change view style according to button presses
const cardsBtn  = document.querySelector('.card-btn');
const listBtn   = document.querySelector('.list-btn');

cardsBtn.onclick = function() {
    cardsBox.style.display  = 'grid';
    listBox.style.display   = 'none';
};

listBtn.onclick = function() {
    cardsBox.style.display  = 'none';
    listBox.style.display   = 'block';
};

// Current date at top
const date          = new Date();
const year          = date.getFullYear();
const month         = date.getMonth();
const monthDay      = date.getDate();
const weekDay       = date.getDay();
const dateElement   = document.querySelector('#date');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
'August', 'September', 'October','November','December'];
const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
dateElement.innerHTML = daysOfWeek[weekDay] + ', ' + monthDay + ' ' + months[month] + ' ' + year;
