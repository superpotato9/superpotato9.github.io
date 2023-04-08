count = 0 
function wow_button() {
  count += 1
  document.getElementById('counter').innerText = count

  // API for get requests
  fetchRes = fetch(
      "https://owen-wilson-wow-api.onrender.com/wows/random");
  // fetchRes is the promise to resolve
  // it by using.then() method
  fetchRes.then(res =>
      res.json()).then(d => {
    //console.log(d)
    element = d
    //document.getElementById("example").innerHTML =  element;
    var iterator = element.values();

    // Here all the e//lements of the array is being printed.
    for (let elements of iterator) {
      //console.log(elements);
      first_object = elements
    }
    // console.log(first_object);
    // console.log(first_object["movie"]);
    document.getElementById("title").innerHTML = "Movie: " + first_object["movie"];
    // document.getElementById("total_wows").innerHTML = "Total wows in movie: " + first_object["total_wows_in_movie"];
    var audio = new Audio(first_object["audio"]);
    audio.autoplay = true;
    audio.play();

  })
}

var link = document.getElementById("button-54");

document.onkeydown = function (e) {
  if (e.keyCode == 32) {
    link.click();
  }
};

