// Officially data type :- data ko kis trha memory me rakha jaata aur kis trha access kiya jaata hai uss hisab se data ko categorise kiya gya hai. Aur yeh 2 trha k hote hai.
// 1. Primitive :- Usually 7 type k hai. 
// => 1. String, 2. Number, 3. Boolean, 4.Null, 5.undefined, 6.Symbol (Kisi v value ko unique banane k liye symbol ka use hota hai). 7. BigInt(koi scientific value yaa koi baadi value hoti hai usko bigint me use kr lete hai)
// 2. Reference (Non-Primitive) :- Object, Array, Function, Date, RegExp, Set.
// Javascript ko mastry krne k liye javascript k objects ko and web event ko master krna hai.
// Reference type data ko object me store kiya jata hai. Isme data ko change kar

let score = 100;
let scoreValue = 100.3;

const isLoggedIn = false
const outsideTemp = null
let userEmail; // yeh undefined show krega

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId); // false

const bigNumber = 4565423156454n


const heros = ["shaktiman", "naagraj", "doga"] // Array declear
console.log(heros);

const myObj = {
    name: "Rahul",
    age: 25,
    class: "b.tech"
} //Objects Decleare

const myFunction = function () {
    console.log("Hello World");
    
}
