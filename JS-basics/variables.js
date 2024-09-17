const accountId = 12546
let accountEmail = 'hari@gmail.com'
var accountPassword = '123456'
accountCity ='Hyderabad'

let accountState;

// accountId = 4564 //not allowed

accountEmail = 'jc@yahoo.co.in'

accountPassword = '258963'

accountCity = 'banglore'// we reserve a varibale memory without declaring let or const keyword in front of them, thats not good practice
/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountCity, accountState])
