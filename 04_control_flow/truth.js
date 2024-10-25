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