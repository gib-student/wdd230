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

function makeCards(busData){
    // Make all the cards in HTML
    let cardNum = 0;
    // console.log("made it here");
    for (let key in busData) {
        cardNum += 1;
        const business = busData[key];
        // Make the div container
        const container = document.createElement('div');
        container.className = "card";
        // Make the img
        const img = document.createElement('img');
        const imgFilepath   = business["image"];
        img.className = "bus" + toString(cardNum) + "-logo";
        img.src = "../images/directory/" + imgFilepath;
        img.alt = business["name"] + " logo";
        // Make business info container
        const infoBox = document.createElement('div');
        infoBox.className = 'info-box';
        // Make business info elements
        const address   = document.createElement('p');
        const phone     = document.createElement('p');
        const URL       = document.createElement('p');
        address.classname   = "bus" + toString(cardNum) + "-address";
        phone.classname     = "bus" + toString(cardNum) + "-phone";
        URL.classname       = "bus" + toString(cardNum) + "-URL";

        // Append children to their parents
        container.appendChild(img);
        container.appendChild(infoBox);

        infoBox.appendChild(address);
        infoBox.appendChild(phone);
        infoBox.appendChild(URL);
    }
}

function makeList(busData) {
    // Make all of the list items

}