"use strict"

// Used JS to change the paragraphs from navy color to red
// The font is now italic. 
// The font is now bigger.
var pars = document.querySelectorAll('body p');

for(var i = 0; i < pars.length; i++){
    pars[i].style.fontStyle = "italic";
    pars[i].style.color = "red";
    pars[i].style.fontSize = "30px";
    

}
// Click the aside and the background changes from blue to green.
var aside = document.querySelector('body aside');
    
    aside.addEventListener("click", function(event){
        event.target.style.backgroundColor = "rgb(31,66,30)";
    });    

// Mouseover the footer and the text color changes
// from red to white.
var footer = document.querySelector('body footer');

footer.addEventListener("mouseover", function (event) {
    event.target.style.color = "white";

});    
// Append the class name and text of each above elements:
// p
// aside
// footer
// First up Paragraphs.
var newPars = document.createElement('p');
var text = document.createTextNode ("I think I just added a new paragraph using JavaScript.");
newPars.appendChild(text);
document.body.appendChild(newPars);

// Next up Aside.
// ALLLL the way at the bottom.
var newAside = document.createElement('aside');
var words = document.createTextNode ("Learning to Code Ain't Easy!");
newAside.appendChild(words);
document.body.appendChild(newAside);

// Lastly Footer.
// It made it's way between the newPars and the newAside at the bottom.
var newFooter = document.createElement('footer');
var foot = document.createTextNode ("New Footer,  Where Will it End Up?");
newFooter.appendChild(foot);
document.body.appendChild(newFooter);