const marvel_heros =["Ironman","Thor","Captain-American","Hulk"]
const dc_heros =["Superman","Batman","flash","Aquaman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // here it will be printing array within an array.

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);// here it will be printing entirely as one string.

// const new_heros=[...marvel_heros,...dc_heros]//we used spread operator to merge both the arrays.
// console.log(new_heros);//its a new way to display the string values . 

// const uruk_array = [1,2,3,[4,5,6],7,[8,9,5],6,2,4]

// const adar_array = uruk_array.flat(Infinity)
// console.log(adar_array);


// console.log(Array.isArray("hari"));// it checks wether its an array or not and returns the boolean value
// console.log(Array.from("hari"));//it converts the value into string 
// console.log(Array.from({name:"hari"}));// it returns an empty array. because it doesnt know want to do.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));// returns a new array from the existing one.


