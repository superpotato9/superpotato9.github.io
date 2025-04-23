function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}//185
function formatNumber(num) {
    return String(num).padStart(3, '0');
}

document.body.style.backgroundImage =  'url("photos/0' + formatNumber(getRandomInt(187)) +  '.jpg");';


console.log('wewo')