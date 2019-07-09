
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("What is your name?/n", function(answer) {
    console.log("Your name must be: " + answer);
    rl.question("How old are you?/n", function(answer) {
        console.log("Wow that's OLD: " + answer);
        rl.close();    
    });
}); 

