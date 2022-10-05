const prompt = require("prompt-sync")();


function greet(){
    console.log('hello' + name +':) ');
}

let name = prompt('Enter a name');

greet(name);
