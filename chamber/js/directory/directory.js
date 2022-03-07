// Constants
const cardsBox  = document.querySelector('.bus-cards-box');
const listBox   = document.querySelector('.bus-list-box');

// Get the business information data
const file = "../data/data.json";
var rawFile = new XMLHttpRequest();
rawFile.overrideMimeType('application/json');
rawFile.open("GET", file, true);

rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
        const text = rawFile.responseText;
        const parsedText = JSON.parse(text);
        makeCards(parsedText);
        makeList(parsedText);
    }
}
rawFile.send(null);

function makeCards(busData) {
    // Make all the cards in HTML
    let cardNum = 0;
    for (let key in busData) {
        cardNum += 1;
        const business = busData[key];
        
        // Make the div container
        const card = document.createElement('div');
        card.className = "card";
        
        // Make the img
        const img = document.createElement('img');
        const imgFilepath   = business["image"];
        img.className = "bus-logo";
        if (imgFilepath != undefined) {
            img.src = "../images/directory/" + imgFilepath;
        }
        img.alt = business["name"] + " logo";

        // Make business info container
        const infoBox = document.createElement('div');
        infoBox.className = 'info-box';

        // Make business info elements
        const name      = document.createElement('p');
        const nameB     = document.createElement('b');
        const address   = document.createElement('p');
        const phone     = document.createElement('p');
        const URL       = document.createElement('p');
        const URLLink   = document.createElement('a');
        URLLink.classList   .add("bus-link");
        nameB.innerHTML     = business['name'];
        address.innerHTML   = business["address"];
        phone.innerHTML     = business["phone"];
        URLLink.href        = business["website"];
        URLLink.innerHTML   = "Website";

        // Append children to their parents
        card.appendChild(img);
        card.appendChild(infoBox);

        name    .appendChild(nameB);
        infoBox .appendChild(name);
        infoBox .appendChild(address);
        infoBox .appendChild(phone);
        URL     .appendChild(URLLink);
        infoBox .appendChild(URL);

        // Append container to container of cards
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
        nameB.innerHTML     = business['name'];
        address.innerHTML   = business["address"];
        phone.innerHTML     = business["phone"];
        URLLink.href        = business["website"];
        URLLink.innerHTML   = "Website";

        // Append children to their parents
        name.appendChild(nameB);
        URL.appendChild(URLLink);
        
        div.appendChild(name);
        div.appendChild(address);
        div.appendChild(phone);
        div.appendChild(URL);

        // Append list item to list
        const ul = document.querySelector('.bus-list');
        ul.appendChild(div);
    }
}
// Display view style depending on the viewport
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

if (vw >= 800 && vw < 1000) {
    console.log("If statement is true");
    cardsBox.style.display  = 'none';
    listBox.style.display   = 'block';
}

// Change view style according to button presses
const cardsBtn  = document.querySelector('.card-btn');
const listBtn   = document.querySelector('.list-btn');

cardsBtn.onclick = function() {
    cardsBox.style.display  = 'block';
    listBox.style.display   = 'none';
};

listBtn.onclick = function() {
    cardsBox.style.display  = 'none';
    listBox.style.display   = 'block';
};