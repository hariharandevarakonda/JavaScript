// Date
let myDate = new Date();
// console.log(myDate);


// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2024,0,25)
// let myCreatedDate = new Date(2024,5,23,5,5)
// let myCreatedDate = new Date("2024-11-25")
let myCreatedDate = new Date("11-25-2024")
// console.log(myCreatedDate.toLocaleString());

let timeStamp = Date.now()
// console.log(timeStamp);

// console.log(myCreatedDate.getTime());

// console.log(Math.round(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "narrow"
})
console.log(newDate);
