// HIGH ORDER ARRAY LOOP

// for of

// ["","",""]
//[{},{},{}]


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}


const greeting = "Hello Manchester!"

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('CAN', "Canada")
map.set('SP', "Spain")

//console.log(map);


for (const [key,value] of map) {                       //forof loop
    // console.log(key, ':-' ,value);
}

const myObject ={
    game : "BGMI",
    game2 : "FIFA"
}

// for (const [key,value] of myObject) {
//     console.log(key, ":-", value);
    
// } for objects forof loop is not working


