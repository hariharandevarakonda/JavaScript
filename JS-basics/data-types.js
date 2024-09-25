"use strict"; //treat all js code as newer version

// alert(3 + 3)// we are using nodejs, not browser

console.log(3 + 3); //code readability should be high

console.log("hariharan");
/*There are two types of data-types:
1.Primitive & 2. Refference 

1.Primitive data-types: they are the type of call by value, and they are 7 types.
*String
*Number
*BigInt
*Undefined
*Null
*Symbol
*Boolean 

2.Reference data-type:they are also known as non-primitive. In this the values are directly allocated to the memory.
they are as follows:
*Arrays
*Objects
*Functions
*/ 

let name = "HARI"
let  age = 25
let isLoggedIn = true

//primmitive data-types
/*number => 2 to the power 53 ex: let value = 20, let num=2.36
 bigint=> used for larger number ex:  let bigValue = 12346584424n;
 string=> '' / "" ex let name ="harry";/'harry';
 boolean=> true/false ex: let loggedIn =true/false;
 null=>standalone value ex: let demo=null;
 undefined=>no value is defined ex: let definedValue; 
 symbol=>unique ex: let uniqueValue = Symbol()
 */

 //Reference data-type

 const heros= ["Iron-Man, Thor, Hulk"];// Array
 const studName =
{    name:"jhon",
     Id:25456 
}//objects

let myFunction =function(){
    console.log("Hello HARI");
}

console.log(typeof(heros));// gives what type of data type is that value. 

//Note: when we check the typeof null it shows as object.