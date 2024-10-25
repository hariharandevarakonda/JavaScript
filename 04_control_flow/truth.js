// const userEmail = "jhon@xyz.ai"
const userEmail = []
if (userEmail) {
    console.log("got the mail id");
}
else{
    console.log("didn't get the mail id");
}

/** falsy values:
 * -> 0 , -0 , BigInt, 0n, ""empty string, null,NaN,undefined
 

** truthy values:
* -> [],"0",{},function(){},1
 */

// if (userEmail.length == 0) {
//     console.log("Empty array");
    
// }

const empobj = {}

if (Object.keys(empobj).length == 0) {
    console.log("empty object");
    
}

//Nullish  Coalescing Operator (??): null undefined

let val1;
// val1 =5 ?? 56
// val1 = null ?? 45
// val1 = undefined ?? 78
val1 = null ?? 45 ??87


console.log(val1);

// terinary operator

// condition ? true: false

const iceCreamPrice = 150

iceCreamPrice <=100 ? console.log("less than 150"): console.log("More than 100");

