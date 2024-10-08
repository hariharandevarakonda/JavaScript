const tenderUser = new Object() // singleton
const user = {} //object litteral

tenderUser.id = "123abc"
tenderUser.name = "HARRY"
tenderUser.email ="harry@gmail.com"

// console.log(tenderUser);

const regularUser ={
    email : "towhid@ban.com",
    fullname: {
        username:{
            firstname:"towhid",
            lastname:"hridoy"
        }
    }
}
//  console.log(regularUser.fullname.username.lastname);
 
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"c", 6:"d"}
// const obj3 ={obj1,obj2}// combining both the objects in one objects
// const obj3 =Object.assign({},obj1,obj2,obj4)// we are giving a target and assigning the source to it.
const obj3 = {...obj1,...obj2,...obj4}//here we are using the spread operator
// console.log(obj3);

const users = [
    {
        id: 2,
        email:"j@kcity.com"
    },
    {
        id: 8,
        email:"lan@hcity.com"
    },
    {
        id:90,
        email:"jh@dcity.com"
    }
]

users[1].email
// console.log(Object.keys(tenderUser));// it will return the output as array
// console.log(Object.values(tenderUser));
// console.log(Object.entries(tenderUser));// it will give you the result as array within an array. the first value will be the key second one is the value of the key.

// console.log(Object.hasOwnProperty('name'));// checks if it has the property and returns boolean value

//here we are de-structuring the objects
const course = {
    courseName: "JavaScript",
    price: "599",
    duration : "1month" 
}

const {courseName} = course
console.log(courseName);



// json
// {
//     "name":"hari",
//     "age":"25"
// }// declaring objects in json format

[
    {},
    {}
]//declaring objects inside an arrays in json format
