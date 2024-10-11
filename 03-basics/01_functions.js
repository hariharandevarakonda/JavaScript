/*A function in JavaScript is a block of reusable code designed to perform a particular task. Functions help organize code into smaller,
 manageable pieces that can be called upon whenever needed, making code more modular and easier to maintain.*/

//  function myName(){
//     console.log("H");
//     console.log("A");
//     console.log("R");
//     console.log("I");
// }

// myName()

// function addNumber(number1,number2){//in functions values that are present in paranthesis are called as parameters
//     console.log(number1 + number2);
// }

// const result = addNumber(56,55)// here its known as arguments in functions ,it is during calling a function

// console.log("Result:", result);

function addNumber(num1, num2) {
  let result = num1 + num2;
  return result;
}
const result = addNumber(56, 25);
// console.log("Result:", result);

function loginUser(username = "Jhon") {
  if (!username) {
    // console.log("Please enter your username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUser("Hari"))
// console.log(loginUser());

function calculateChartPrice(val1, val2, ...num) {
  // here the three dots are called rest operator.
  return num;
}

//console.log(calculateChartPrice(233, 45 , 668,5000,965));

//creating an object and passing it to the function
const user = {
  username: "HARI",
  age: 25,
};
function handleObjects(anyobject) {
  console.log(`Username is ${anyobject.username} and age  is ${anyobject.age}`);
}
handleObjects(user);

//passing an array in functions
const myArray= [25,456,778,52,89]

function returnArray(getArray){
  return getArray[3]
}
console.log(returnArray(myArray));
