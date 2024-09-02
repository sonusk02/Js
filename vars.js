const accountId = 135
let accountEmail = "sonu@gmail.com"
var accountPassword = "1230"
accountCity = "Ludhiana"
let accountState;

//accountId = 23  // Const variables cannot change
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// we can change the let and var and nomral variables values but not const variables value..

accountEmail = "sk@sk.com"
accountPassword = " 2121"
accountCity = "Ludhiana"

console.table([accountEmail, accountPassword, accountCity])

/*
Perfer do not use var
because of issue in block scope and functional scope
*/
