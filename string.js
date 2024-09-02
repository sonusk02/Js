const name = "Sonu"
let age = 25

// Jab + ka sign use krte hai toh Concatination krne  bbolte hai yeh string me hota hai
// console.log(name + age + "value"); // yeh outdate version hai

// new version and used in companies

console.log(`Hello my name is ${name} and my age is ${age}`); // In this way we can concat the string.




// another way to declare the string.
const gameName = new String('Sonukumar') // Humko ess ko array k index jaise v access kr sakte hai.

// console.log(gameName[0])// jaise eska output sirf S aayega
// console.log(gameName.__proto__); // ess object mil gya hai but yeh empty show hoga but yeh empty nhi hai esme bhut saadi values hai esko access krne k liye . lga k kr sakte hia jaise (__proto__.concat) method hai aur direct v access kr sakte hai.

// Some example of using this object.
// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // Output:- SONU
// console.log(gameName.charAt(2)); // character ka index find krne k liye hum esko use krte hai
// console.log(gameName.indexOf('u')); // Yeh character ka index  ki value btne k liye hum esko use krte hai

const newString = gameName.substring(0, 5) // Slicing krna bolte hai esko aur yeh end number ki value nhi deta hai.
console.log(newString); // Output:- SonuK

const anotherString = gameName.slice(-8, 4) //hume esme positive and negative slicing kr sakte hai.
console.log(anotherString);


const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim()); //Trim simply white space ko remove kr deta hai aage aur piche se












