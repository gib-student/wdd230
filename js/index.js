var year = new Date().getFullYear();
var date = document.lastModified;
document.getElementById("copyright").textContent += year;
document.getElementById("date-modified").textContent += date;