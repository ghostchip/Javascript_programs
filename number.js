const prompt = require('prompt-sync')();

let number = parseInt(prompt('Enter a number'));

if ( number > 0){
    console.log('Number entered is positive integer');
}
else if(number < 0){
    console.log('THe number is a negative integer');
}
else{
    console.log('Number is zero');
}