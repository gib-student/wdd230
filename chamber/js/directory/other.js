// Show/hide cards and list according to buttons
const cardsBox  = document.querySelector('.business-cards-box');
const listBox   = document.querySelector('.business-list-box');

function hideCards() {
    cardsBox.style.display  = "none";
    listBox.style.display   = "block";
}

function hideList() {
    cardsBox.style.display  = "block";
    listBox.style.display   = "none";
}
