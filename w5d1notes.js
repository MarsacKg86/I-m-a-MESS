// Node.js is a library. We can now have access to your computer not just the browser. That sounds very ominous. 
// Anything you could do on command line you can now do via Node.js.

/*
MAKE SURE YOU HAVE THE MOST CURRENT NODE VERSION INSTALLED :)
To check and see, go to your command line and type in 
node -v and it should pop up which version you have.

What Can Node.js Do?
Node.js can generate dynamic page content
Node.js can create, open, read, write, delete, and close files on the server
Node.js can collect form data
Node.js can add, delete, modify data in your database

What is a Node.js File?
Node.js files contain tasks that will be executed on certain events
A typical event is someone trying to access a port on the server
Node.js files must be initiated on the server before having any effect
Node.js files have extension ".js"


**Just gonna work in the command line for today**
We are learning how to export a function in file2 by referencing it inside the file1 and then in the command line we are going to use node to see that the function has been exported from file2 into file1.
We are going to create 2 files for this example. 1st will be your main file that will "require" the function from your 2nd file. You of course can choose to name these whatever you'd like but for reference here is how I did it:

Use the exports keyword to make properties and methods available outside the module file.
 
file 1-main.js*/

 "use strict"
var test = require('./anotherFile');

console.log(test);

/*file 2-anotherFile.js*/

"use strict"
exports.myDateTime = function () {
    return Date();
  };

/*In your fav command line (mine is Powershell) make sure you are in the correct directory for 
were you saved these files. For me I saved them to the Desktop. So for me this is where I navigated:*/
PS C:\Users\theClubhou.se\Desktop>
/* Now we want to use node to get the correct file
You want to type node space then the file name*/
PS C:\Users\theClubhou.se\Desktop> node main.js
/*The output will look like this:*/
{ myDateTime: [Function] }
/*WOOHOO Victory!!! we know that the function myDateTime is inside file1!!! It got there thanks
to exports!!!
Hope that made sense :)
*/



