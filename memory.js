// Memory Are Two type:-
// +++++ Stack and Heap +++++ 

// Stack (Primitive Data Type), Heap(Non - Primitive Data Type)
// jab v stack memory use hoti hai toh jo v variable humne declare kiya uska hume copy milta hai.
// jab v heap memory use hoti hai ya chala jaata hai toh humne declare kiya uska hume reference milta hai toh hum jo v change krenge wo origional value me hoga.

let myName = "SonuKumar"
let anotherName = myName
anotherName = "Sunil"
console.log(myName) // SonuKumar
console.log(anotherName) // Sunil

let userOne = {
    email : "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "sonu@google.com"

console.log(userOne.email); // Dono K andr value same jaayegi
console.log(userTwo.email); // Dono K andr value same jaayegi


