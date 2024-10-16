const user = {
    username: "harry",
    age:25,

    welcome: function(){
        // console.log(`${this.username}, welcome to chai aur code`);// here "this" is a keyword in javascript. it refers to the context.
        // console.log(this);
        
    }
}

// user.welcome()
// user.username = "jhon"
// user.welcome()

// console.log(this);


// function chai(){
//     let username= "virat"
//     console.log(this.username);
    
// }

// chai()

// const bday = () => { //"=>" this is symbol is known as arrow function.
//     let name = 'jhon'
//     console.log(this);
    
// }
// bday()

// const number = (num1,num2) => { // basic arrow function . this is a explicit return arrow function
//     return num1 * num2
// }

// console.log(number(25,6)); 


// implicit return arrow functoin

// const addTwoNum = (num1,num2) => num1 + num2

// console.log(addTwoNum(25,85));


//define object inside a arrow function

const obj = (num3,num4) => ({name:"kailu"})

console.log(obj(56,89));
