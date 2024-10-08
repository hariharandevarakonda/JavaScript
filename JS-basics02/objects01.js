//objects can be declared by literal or constructor/singleton. and in objects we declare values as keys and values.

// object literals
//const elf = {}// object literal
//Object.create // constructor/singleton

const mySym = Symbol("myKey")
const user ={
    name: "hari",
    "full-name": "hari haran",
    // mySym: "myKey",//this is not acting as a symbol.
    [mySym]: "myKey",
    age : 24,
    location: "hyd",
    email: "hari@vcpl.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Tuesday","Thursday"]
}

// console.log(user);
// console.log(user["full-name"]);
// console.log(user.email);
// console.log(user["email"]);
// console.log(user[mySym]);// to return the symbol value we have to usen [] square brackets.

// user.age = 25
// Object.freeze(user)// it will freeze the values and doesnt allow any changes to the data.
// user.age = 26
// console.log(user);

// declaring functions in objects

user.greeting=function(){
    console.log("Hello js learner");
}
user.greetingTwo = function(){
    console.log(`Hello js learner, ${this.name}`);
    
}
console.log(user.greeting());
console.log(user.greetingTwo());


