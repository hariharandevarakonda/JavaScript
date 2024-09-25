const name= "Hari";
const age = 24;

console.log(`My name is ${name} and my age is ${age}`);// new way of displaying string value  in the console.

const gameName = new String('Call-Of-Duty')

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf("l"));

console.log(gameName);


const newString=gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-9,2)
console.log(anotherString);

const newName="     BGMI   "
console.log(newName);
console.log(newName.trim());


const url = "hhtps//manUtd%1999.com"

console.log(url.replace('%1999','-99'));

console.log(url.includes('man'));

console.log(gameName.split('-'));
