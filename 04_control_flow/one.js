// IF

// const isUserLogged = "logged in"

// if (isUserLogged == "logged in") {
//     console.log("successfully logged in");
// } else{
//     console.log("Please try again");
// }
 
// const score =200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
//  console.log(`user power: ${power}`);// this is will not be executed because its declared outside of the scope.

// NESTED IF ELSE STATEMENT
// const balance = 6000

// if (balance == 5000) {
//     console.log("Your account balance is low");
// }else if (balance == 4000) {
//     console.log("please add amount to your account for additional charges");
// }else {
//     console.log("you have sufficient balance ");
    
// }

const userLoogedIn = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
const guestUser = true

if (userLoogedIn && guestUser && false) {                          // checking multiple conditions using &&(and operator)
    console.log("User Logged in Successfully");
    
}

if (loggedInFromGoogle || loggedInFromEmail) {          //checking conditions using pipelines ||
    console.log("Allow user to login");  
    
}
