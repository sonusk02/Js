let score = 55
console.log(typeof score);
console.log(typeof (score));

// converting number to string and string to number
let scores = "55"
console.log(typeof scores);
console.log(typeof (scores));

let valueInNumber = Number(scores) //converting string into number
console.log(typeof valueInNumber);

//NaN Not a Number
 let score1 = "25abc"
 
 let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);

 console.log(valueInNumber1);

 let score2 = null
 
 let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);

 console.log(valueInNumber2);

 let score3 = undefined
 
 let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);

 console.log(valueInNumber3);


//  "55" => 55
// "55abc" => NaN
// true => 1, false => 0
// "" => false
// "Sonu" => true
// null => NaN


let isLoggedIn = "Sonu"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


let someNumber = 135
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);





