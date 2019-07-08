"use strict"


var { about } = require("./aboutusjames.js");
var { contact } = require("./contactjames.js");
var { error } = require("./404.js");

var James = "tall";
console.log("Welcome To Our Application.");


if (James === "tall") {
    console.log(about());
}
else if (James === "short"){
    console.log(contact());
}
else {
    console.log(error());
}

