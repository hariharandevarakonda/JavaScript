// const coding = ["js", "java", "python", "R", "cpp"]


// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// } ) //forEach loop dosen't return the value

// console.log(values);


const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNum.filter( (num) => num > 7 )
// console.log(newNums);


// const newNums = myNum.filter( (num) => {
    // return num >5
// } )
// console.log(newNums);


// const newNums = []

// myNum.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books =[ 
    { title: 'never finished', genre: 'motivational', published: 2017, edition: 2022},
    { title: 'Hanuman', genre: 'spiritual', published: 1980, edition: 1984},
    { title: 'Sreemadh Ramayanam', genre: 'spiritual', published: 1980, edition: 2004},
    { title: 'Maha Bharatam', genre: 'History', published: 1970, edition: 1990},
    { title: 'Garuda Puranam', genre: 'divine', published: 1985, edition: 1992},
    { title: 'Everthing you belive', genre: 'inspirational', published: 2017, edition: 2020},
    { title: 'Monk mindset', genre: 'inspirational', published: 2014, edition: 2019},
    { title: 'You Can', genre: 'motivational', published: 2020, edition: 2021},
     ];

     let userBooks = books.filter( (bk) => bk.genre === 'inspirational' )

     userBooks = books.filter( (bk) => {
        return bk.published >= 1940 && bk.genre === 'spiritual'})

     console.log(userBooks);
     