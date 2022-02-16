var temp= 57;
var wSpeed= 15;
var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + 
  (0.4275*temp*Math.pow(wSpeed,0.16));
var windChill= Math.round(windChill);
var wSpeedText = String(wSpeed) + " km/h"
var windChillText = String(windChill) + " *F"

document.querySelector(".wind-speed-value").innerHTML = wSpeedText;
document.querySelector(".wind-chill-value").innerHTML= windChillText;

// Helpful site for these calculations: 
// https://codepen.io/mintnerknown/pen/aQbORY