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
    // console.log("inner: " ,a);//block scope
    
}

// console.log(a);//global scope


//  ***************Nested scope*************************

function one(){
    const username = "Harry"

    function two(){
        const website = "youTube"
        // console.log(username);
        
    }
    // console.log(website);// because it is declared outside the scope it will not dipaly the website name.

    two()//we are calling the function
}

one()


if(true){
    const username = "Harry"
    if(username==="Harry"){
        const website = "Code with "
        // console.log(website + username);
    }
    // console.log(website);
    
}
// console.log(username);


//*********************************Hoisting******************************* */

console.log(addOne(20))  // HERE FOR A NORMAL FUNCTION VALUES CAN BE INITIALISED BEFORE THE FUNCTION

function addOne(num){
     return num + 1
}

// addTwo(25)                          //]/*
const addTwo = function(num){          //]  WE CANNOT INITIALISE A VALUE BEFFORE THE FUNCTION BECAUSE WE ARE STORING THE FUNCTION
                                       //]  IN A VARIABLE.
return addTwo + 5                      //]  THIS IS CALLED AS HOISTING.
}                                      //]
addTwo(15)                             //]*/



