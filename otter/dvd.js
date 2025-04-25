/*
 * Copyright (c) 2025.
 */

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function formatNumber(num) {
    return String(num).padStart(3, '0');
}
var cache = document.createElement("CACHE");
cache.style = "position:absolute;z-index:-1000;opacity:0;";
document.body.appendChild(cache);
function preloadImage(url) {
    var img = new Image();
    img.src = url;
    img.style = "position:absolute";
    cache.appendChild(img);
}

document.getElementById('content').innerHTML = "<audio id='audio' src='cat.mp3' autoplay></audio>";

const Dvd_logo = document.querySelector(".ball");

Dvd_logo.style.backgroundImage = "url('photos/0" + formatNumber(getRandomInt(186)) + ".jpg')"

let iterationCount = 0;
let background = "photos/0" + formatNumber(getRandomInt(186)) + ".jpg";
Dvd_logo.addEventListener("animationiteration", () => {

    iterationCount++;
    console.log(`Animation iteration count: ${iterationCount}`);
    Dvd_logo.style.backgroundImage = "url(" + background +")";
    console.log(background);
    background = "photos/0" + formatNumber(getRandomInt(186)) + ".jpg";
    preloadImage(background);

});
window.addEventListener("click", function(event) {
    background = "photos/0" + formatNumber(getRandomInt(186)) + ".jpg";
    Dvd_logo.style.backgroundImage = "url(" + background +")";
    document.getElementById('audio').play();
});
 // Dvd_logo.style.background = "url('photos/0" + getRandomInt(0,677) + ".jpg') no-repeat;";

