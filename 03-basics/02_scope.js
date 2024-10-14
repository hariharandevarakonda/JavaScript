//{} -> curley braces which is declared in functoins or conditional loops is called as "scope".

/*what ever is written in the below if block is known as block scope.
where it only accepts the values within it . it will not consider values outside of the scope.
example:
var c = 55//it will not accept this value. because its declared outside of the if scope.

if(true){
    let a = 10
    const b = 20
    var c = 85
}*/
 
// global scope are the one which is declared outside any function or conditional loops.
/*
let num = 568//this is a global scope.

if(num===false){
    console.log(num)
    return num
}
*/

let a = 300

if (true){
    let a = 52
    const b =45
    console.log("inner: " ,a);//block scope
    
}

console.log(a);//global scope
