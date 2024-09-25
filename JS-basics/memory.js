// Two types of memories ,they are Stacka & Heap.

// Stack memory is used in primitive data-types.
// Heap memory is used in reference data-types.

//example for Stack
let myName = "Daniel";

let anotheName = myName;
anotheName="Jack";

console.log(anotheName);
console.log(myName);

//example for Heap

const userOne={
    email: "jhon@yahoo.com",
    Id: 25644
}
let userTwo = {
    email:"daniel@yahoo.com",
    Id:5264
}    
console.log(userTwo.email);
console.log(userOne.email);

