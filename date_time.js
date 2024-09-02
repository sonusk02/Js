//Dates

let myDate = new Date()
//console.log(myDate); // not in proper form

// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString()); // Output :- 8/23/2024, 11:42:00 PM
// console.log(myDate.toLocaleDateString()); // Output :- 8/23/2024
// console.log(myDate.toJSON()); // Output :- 2024-08-23T18:25:47.277Z


//Imp baat ki javascriot me month 0 se start hote hai. Very imp
// let myCreateDate = new Date (2023, 0, 23) // Output :- 1/23/2023, 12:00:00 AM, yeh bss 
// let myCreateDate1 = new Date (2023, 0, 23, 5, 3)
// // console.log(myCreateDate.toLocaleString());
// console.log(myCreateDate1.toLocaleString()); //Output:- 1/23/2023, 5:03:00 AM

let myCreateDate = new Date ("09-08-2024") //1/14/2023, 12:00:00 AM
//console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now
// console.log(myTimeStamp()); // Output :- 1724472051080 yeh milisec me aata hai time
// console.log(myCreateDate.getTime()); // Output :- 1725733800000 yeh milisec me aata hai time

//console.log(Date.now()); // yeh abhi ka time chahiye toh yeh but yeh milisec me aata hai


//Imp hai interview k liye
//console.log(Math.floor(Date.now()/1000)); // sec me convert krne k liye yeh formula hai and interview me alsar pochte hai.

let newDate = new Date(); // date apne ap me object hai ek
// console.log(newDate); // Output :- 2024-08-24T04:08:54.827Z
// console.log(newDate.getMonth()); // it give only month and js me month 0 se start.
// console.log(newDate.getHours() + 1); 
// console.log(newDate.getDay());


// When we have to write in full format then hum string enterpulation lete hai
// console.log(`${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`)

newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',

})














