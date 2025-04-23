function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function formatNumber(num) {
    return String(num).padStart(3, '0');
}

const Dvd_logo = document.querySelector(".ball");

Dvd_logo.style.backgroundImage = "url('photos/0" + formatNumber(getRandomInt(186)) + ".jpg')"

let iterationCount = 0;

Dvd_logo.addEventListener("animationiteration", () => {

    iterationCount++;
    console.log(`Animation iteration count: ${iterationCount}`);
    Dvd_logo.style.backgroundImage = "url('photos/0" + formatNumber(getRandomInt(186)) + ".jpg')"

});


   // Dvd_logo.style.background = "url('photos/0" + getRandomInt(0,677) + ".jpg') no-repeat;";

