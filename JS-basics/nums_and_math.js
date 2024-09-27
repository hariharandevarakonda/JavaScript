const score = 2
// console.log(score);

const balance = new Number(25)
// console.log(balance);

//console.log(balance.toString().length);//it converts the number to string and tells whats the lenght of the string.

// console.log(balance.toFixed(2));

const newNumber = 125.6699
//console.log(newNumber.toPrecision(4));

const amount = 2000000
//console.log(amount.toLocaleString('en-IN'));//Converts a number to a string by using the current or specified locale.

//--------------------------------------------------------------------------------------------------------------------------

// console.log(Math.abs(-99)); 
// console.log(Math.round(4.5));
// console.log(Math.ceil(5.2));
// console.log(Math.floor(8.9));
// console.log(Math.min(1,2,8,0));
// console.log(Math.max(23,45,77,0,56));

console.log(Math.random());// always give the value between 0 to 1.
console.log((Math.random() * 10) + 1);// we add + 1 here to avoid 0 as answer.
console.log(Math.floor(Math.random() * 10) + 1);// here we will get values between 1 to 9.


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

