"use strict"

window.onload = function () {
var pars = document.querySelectorAll('p');

for(var i = 0; i < pars.length; i++){
    pars[i].style.fontStyle = "italic";
    pars[i].style.color = "red";
    pars[i].style.fontSize = "25px";
    pars[i].addEventListener("mouseover", function (event) {
        // pars[i].
        event.style.backgroundColor = "black";
    });
}



    
}
