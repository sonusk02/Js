const score = 400 // automtically deduct by js  it is number

const balance = new Number(100) // here a proper way to define a number
//console.log(balance);// it show output [number: 100]
//console.log(score);// it show just number

// jab number ko hum new Number kr k declare krte hai toh humre pass thodi property unlock hoo jaati hai.
//console.log(balance.toString());// ab yeh string bn gya 
//console.log(balance.toString().length);


console.log(balance.toFixed(2)); // Yeh help krega number k baad kitne point value milegi like humne 2 liya hai to output me 100.00 hoga.

const otherNumber = 23.8966
//console.log(otherNumber.toPrecision(3)); // yeh ekdm precise value deta hai

const otherNumber1 = 123.8966
//console.log(otherNumber1.toPrecision(3)); // yeh output 124 dega

//console.log(otherNumber1.toPrecision(4)); // yeh 123.9 dega
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In')); // To get the value in indian way me coma lga k dega


// ++++++++++++++++ Maths ++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4)); // convert negative number in positive.
//console.log(Math.ceil(4.7)); // ceil function use krte hai uppar ki value k liye like 4.7 ho ya 4.2 output 5 milega

//console.log(Math.round(4.6)); // yeh output round off kr k deta hai like 4.2 ya 4.4 hua toh 4 and 4.6 ya 4.9 hua toh 5
//console.log(Math.floor(4.9)); // eska output : 4.2 ho ya 4.9 output humesa 4 aayega

// console.log(Math.pow(2, 3)); // yeh power function hai
// console.log(Math.min(4,6,0,8)); // yeh lower value dikhata hai
// console.log(Math.max(4,6,0,8)); // yeh higher value dikhata hai


console.log(Math.random()); //Math.random  0 to 1 k bich me hi value hi aati hai.

console.log(Math.random()*10 + 1); //ab zero jada value hi aayegi
console.log(Math.floor(Math.random()*10) + 1); //ab confirm zero jada value hi aayegi and math.floor function help krega niche wali value k liye.

const min = 10
const max = 20

// Math ka formula and imp v hai
console.log(Math.floor(Math.random() * (max - min + 1) + min));



