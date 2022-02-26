// DONT ALTER THIS!!! This is what will determine whether the input for the
// title field is valid or not. If it is valid, then match will return a 
// string, but if not, then it will return null.
const re = /[a-z-\s]{7,}/gi;
let match = myString.match(re);
console.log(match);
