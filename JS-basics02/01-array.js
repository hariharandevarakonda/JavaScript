/*Arrays:- array store group of collective data-types under one variable name . In javaScript array is resizeable,
 */


const myArr = [12, 23, 56 ,85 ,220, 2]
const myHeros = ["iron-man", "thor", "hulk", "roman reings"]

const myArr2 = new Array(1,2,3)
// console.log(myArr2);

// Array methods

// myArr.push(6) //it adds the number at the last
// myArr.pop(6) //it removes the added number 

//myArr.unshift(62) // it will add the number at starting of an array
//myArr.shift() // it will remove the numbre that is in start of an array

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(23));
// let newArr = myArr.join()
// console.log(myArr);
// console.log( newArr);

//Slice or Splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3) //slice will not manipulate the original array

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3) // splice will manipulate the original array
console.log("C",myArr);
console.log(myn2);


