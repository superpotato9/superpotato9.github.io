function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}//185
function formatNumber(num) {
    return String(num).padStart(3, '0');
}

document.body.style.backgroundImage =  'url("photos/0' + formatNumber(getRandomInt(187)) +  '.jpg");';

document.getElementById('content').innerHTML = "<div id=\"ex1\" class=\"container\">\n" +
    "    <div id=\"ex1-layer\" class=\"box\">\n" +
          ' <img id="otter-photo" src="https://picsum.photos/id/237/500/500"/>' +
    '<p id="click">Click me</p>' +
    "    </div>\n" +
    "</div>"


let constrain = 80;
let mouseOverContainer = document.getElementById("ex1");
let ex1Layer = document.getElementById("ex1-layer");

function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - (box.height / 2)) / constrain;
    let calcY = (x - box.x - (box.width / 2)) / constrain;

    return "perspective(100px) "
        + "   rotateX("+ calcX +"deg) "
        + "   rotateY("+ calcY +"deg) ";
};

function transformElement(el, xyEl) {
    el.style.transform  = transforms.apply(null, xyEl);
}

mouseOverContainer.addEventListener("mousemove", (e) => {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([ex1Layer]);

    window.requestAnimationFrame(function(){
        transformElement(ex1Layer, position);
    });
});

document.getElementById('otter-photo').src = 'photos/0' + formatNumber(getRandomInt(186)) + '.jpg';

window.addEventListener("click", function(event) {

    document.getElementById('otter-photo').src = 'photos/0' + formatNumber(getRandomInt(186)) + '.jpg';
    document.getElementById('click').style.display = 'none';

});

particlesJS.load('particles-js', 'particles-config.json', function() {
    console.log('particles.js loaded - callback');
});

