/*
 * Copyright (c) 2025.
 */
let min = 30; //min distance they start moiving
let jump_distance = 100;
let old_mouse_state = []
const time = 0;
let i = 0;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function remove_by_value(array, value){


    let index = array.indexOf(value);

    const x = array.splice(index, 1);




}
const screen_height  =  window.innerHeight;
const screen_width =  window.innerWidth;

function getPoint(target) {
    let target_dom = document
        .getElementById(target);
  return[ target_dom.offsetTop,
    target_dom.offsetLeft] ;
}

let buttons = [];
function new_button(id){

    document.getElementById(id).style.display = "none";
    buttons.splice(id[3],1);

    document.getElementById('content').innerHTML += '  <button style="position: fixed; left: ' + getRandomInt(screen_width-10) + 'px; top:' +  getRandomInt(screen_height-100)+ 'px;"  onclick="new_button(this.id)" id="btn' + i + '" >Click Me!</button>'
    buttons.push("btn"+i);
    i++;
    document.getElementById('content').innerHTML += '  <button style="position: fixed; left: ' + getRandomInt(screen_width-10) + 'px; top:' +  getRandomInt(screen_height-100)+ 'px;"  onclick="new_button(this.id)" id="btn' + i + '" >Click Me!</button>'
    buttons.push("btn"+i);
    i++;
    console.log(buttons);
    jump_distance += 5;

}

let mouseX = 0;
let mouseY = 0;
let button_xy =[];
let x_distance =0;
let y_distance =0;
let close = [];
function near_mouse(buttons_list){
    //returns list of items close to mouse

    if(old_mouse_state.length > 0 || old_mouse_state[0]/mouseX >.2 || old_mouse_state[1]/mouseY >.2  ){
    for (let i = 0; i !== buttons_list.length; i++) {


       button_xy = getPoint(buttons_list[i]);
       x_distance = Math.abs( button_xy[0] - mouseX);
       y_distance =  Math.abs(  button_xy[1] - mouseY);

       console.log(y_distance, x_distance);

       //if(x_distance > min){

       //}
       let new_x = (getRandomInt(mouseX ) * -1 ) + (screen_width/2);
       let new_y = (getRandomInt(mouseY) *   -1 ) + (screen_height/2);
        console.log(new_x, new_y);
       if (new_x > screen_width|| Math.sign(new_x) == -1){
           new_x = getRandomInt(screen_width);
           console.log('overflow width');

       }
        if (new_y > screen_height || Math.sign(new_y) == -1){
            new_y = getRandomInt(screen_height);
            console.log('overflow height');

        }


       if(x_distance <= min  ){
           console.log('close');

           //document.getElementById(buttons_list[i]).innerText = "close";
           let button = document.getElementById(buttons_list[i]);

           button.style.transition = "left 1s linear , top 2s linear";
           button.style.left = new_x + 'px';
           button.style.top = new_y + 'px';
       }
        else if(y_distance <= min ){
            console.log('close y ');
           let button = document.getElementById(buttons_list[i]);
           button.style.transition = "left 2s linear, top 1s linear   ";

           button.style.left = new_x + 'px';
           button.style.top = new_y + 'px';


       }


    }
    }

    old_mouse_state = [mouseX, mouseY];

}

document.addEventListener('mousemove', function(event) {
    mouseX = event.pageX;
    mouseY = event.pageY;
    near_mouse(buttons);






});