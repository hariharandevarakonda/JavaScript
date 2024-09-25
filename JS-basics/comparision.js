// console.log(20 > 10);
// console.log(20 < 10);
// console.log(20 >=10);

// console.log("2" + 1);

console.log(null > 0);//false
console.log(null < 0);//false
console.log(null >= 0);//true
/*
the reason is that an equality check == and comparisions > < >= =< work differently.
Comparision convert null to a number, treating it as 0.
that's why null>=0 is true and null>0 is false.*/

// === it checks weather  the value is in sring or number and returns the boolean value true/false

console.log("20" === 20);//false 
console.log(40===40);//true

