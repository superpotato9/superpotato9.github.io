/*
 * Copyright (c) 2025.
 */
let min = 30; //min distance they start moiving
let jump_distance = 120;
let i = 0;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
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

    document.getElementById('content').innerHTML += '  <button style="position: fixed; left: ' + getRandomInt(screen_width-100) + 'px; top:' +  getRandomInt(screen_height-100)+ 'px;"  onclick="new_button(this.id)" id="btn' + i + '" >Click Me!</button>'
    buttons.push("btn"+i);
    i++;
    document.getElementById('content').innerHTML += '  <button style="position: fixed; left: ' + getRandomInt(screen_width-100) + 'px; top:' +  getRandomInt(screen_height-100)+ 'px;"  onclick="new_button(this.id)" id="btn' + i + '" >Click Me!</button>'
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
    for (let i = 0; i !== buttons_list.length; i++) {


       button_xy = getPoint(buttons_list[i]);
       x_distance = Math.abs( button_xy[0] - mouseX);
       y_distance = Math.abs( button_xy[1] - mouseY);

       //console.log(y_distance, x_distance);

       //if(x_distance > min){

       //}
       if(x_distance <= min ){
           console.log('close');

           //document.getElementById(buttons_list[i]).innerText = "close";
           let button = document.getElementById(buttons_list[i]);
           //TODO maake it so the transition time starts sslower? but not by much
           button.style.transition = "left 2s , top 1.5s ";
           button.style.left =  getRandomInt( Math.abs(button_xy[0]+jump_distance)) + "px";
           button.style.top = getRandomInt(Math.abs(button_xy[1]+jump_distance)) + "px";

       }
        else if(y_distance <= min ){
            console.log('close y ');
           let button = document.getElementById(buttons_list[i]);
           button.style.transition = "left 2s , top 2s";
           button.style.left =  getRandomInt( Math.abs(button_xy[0]+jump_distance)) + "px";
           button.style.top = getRandomInt(Math.abs(button_xy[1]+jump_distance)) + "px";



        }


    }

}

document.addEventListener('mousemove', function(event) {
    mouseX = event.pageX;
    mouseY = event.pageY;

    near_mouse(buttons);




});