const coding = ["js", "java", "python", "R", "cpp"]

// //foreach - it is a high order loop

// coding.forEach(function (val) {
//     // console.log(val);
// })


// coding.forEach( (val) => {      //using an arrow function
//     // console.log(val);
    
// })


// function printMe(item){    
//     console.log(item);
    
// }

// coding.forEach(printMe)    // declaring a function and taking its reference 


// coding.forEach( (item, index, arr)=>{
//     console.log(item,index,arr);
    
// } )


const myNewCode = [
    {
        laguageName: "javascript",
        languageFileName: "js"
    },
    {
        laguageName: "java",
        languageFileName: "java"
    },
    {
        laguageName: "python",
        languageFileName: "py"
    },
] // array with multiple objects in it


myNewCode.forEach( (item)=>{
    
    console.log(item.laguageName);
    
})