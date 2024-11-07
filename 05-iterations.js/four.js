const myObj = {
    js : "javascript",
    cpp: "c++",
    py : "Python"
}

for (const key in myObj) {         //forin loop
    // console.log(`${key} is the shortcut for ${myObj[key]}`);
    
}


const program = ["JS", "CPP", "PY", "R"]

for (const key in program) {
    // console.log(program[key]);
    
}


const map = new Map()  // MAP is not iterateable
map.set('IN', "India")
map.set('CAN', "Canada")
map.set('SP', "Spain")

for (const key in map) {
    console.log(key);
       
}