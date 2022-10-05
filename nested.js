const prompt = require('prompt-sync')();

let number = parseInt(prompt('Enter a number'));

if (number > 0){
    if (number == 0){
        console.log('The number is zero');
    }else{
    console.log('The number is positive ');
    }
}else{
    console.log('The number is negative');
}
