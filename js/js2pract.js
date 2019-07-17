"use strict";
// warm-up for 7/16/19 first day of es6********************************
/*
    EXPONENTIATION
    We know that the old JS syntax uses this:
    >> Math.pow(a,b)
    Using the ES6 exponentiation Operator, refactor the following:
 */

// var x = 4 ** 5;
// console.log(x);
//
// let random = Math.floor(Math.random() * (2 ** 3));
// console.log(random);
//
// /*
//     LET & CONST
//     Refactor the above to use es6 variable types.
//     What happens when you change the 'random' variable to a const?
//
//     Why does this happen?
//     How do we fix this behavior?
//     //let allows function to work
//     //const throws and error
//  */
//
// random = Math.floor(Math.random() * x);
// console.log(random);
//
// /*
//     STRING INTERPOLATION
//     we can use template strings in the new es6 syntax to avoid concatenating
//      multiples strings together.
//
//      Uncomment the two constants, put in the appropriate strings.
//      Refactor the code down below to use template strings.
//  */
//
// const name = "Alli";
// const cohort = "Betelgeuse";
// const greeting = `Hello ${name}! You are in the ${cohort} cohort.`;
// console.log(greeting);
//
// /*
//     FOR...OF
//     lets us iterate over Arrays, NodeLists, and even Strings
//
//     rewrite the following as a for...of loop
//  */
// // example of a for of pulling index values less than three
// const numbers = [1,2,3,4,5,6];
// console.log("starting count");
// for(let [index,number] of numbers.entries()){
//     if(index < 3){
//         console.log(number);
//     }
// }
//
// const instructors = [
//     'Daniel',
//     'Vivian',
//     'Sophie',
//     'David',
//     'Justin',
//     'Fer',
//     'Terrell'
// ];
//
// instructors.forEach(function(instructor){
//     console.log(instructor);
// });
// // for of version of for each loop above
// for(let instructor of instructors){
//     console.log(instructor)
// };
//
// /*
//     ARROW FUNCTIONS
//     Shorter, cleaner and allows the 'this' keyword to be bound lexically.
//     Pretty neat.
//
//     How can you use fat arrow syntax to refactor the code below?
//     Make it as concise as possible.
//  */
//
// function add(x = 2, y = 3){
//     return x + y;
// }
// // new code
// const add =(x = 2, y = 3) => x + y;
//
// function square(x) {
//     return x * x;
// }
// //new code
// const square = x => x * x;
// /*
//     DEFAULT FUNCTION PARAMETER VALUES
//     refactor the following so that variable 'greeting' has a value of 'Good
//      Morning' and 'name' has the value of 'Betelgeuse.
//
//      Check your work.
//  */
//
// const myGreeting = (greeting,name) => {
//     return greeting + name;
// };
//
// console.log(myGreeting());
// console.log(myGreeting("Hello", "Sophie"));
// // new code
//
// const myGreeting = (greeting = "Good Morning",name= "Betelgeuse") => {
//     return greeting + name;
// };
//
//
// /*
//     OBJECT PROPERTY VARIABLE ASSIGNMENT
//     Refactor the Object below to use shorthand property assignment
//  */
//
// const dog = "Spike";
// const cat = "Tom";
// const mouse = "Jerry";
//
// const pals = {
//     dog: dog,
//     cat: cat,
//     mouse: mouse
// };
// // new code
// const dog = "Spike";
// const cat = "Tom";
// const mouse = "Jerry";
//
// const pals = {
//     dog,
//     cat,
//     mouse
// };
// /*
//     OBJECT DESTRUCTURING
//     1. Use Object Destructuring to refactor
//  */
//
// const make = 'nissan';
// const model= 'rogue';
// const color = 'white';
//
// const myCar = {
//     make,
//     model,
//     color
// };
//
// const carInfo = ({make,model}) => {
//     // var make = myCar.make;
//     // var model = myCar.model;
//     console.log(make);
//     console.log(model);
// };
//
// carInfo(myCar);
//
// /*
//     OBJECT DESTRUCTURING
//     2. Remember the 'instructors' array that we created at the top of this
//      file? Use Array Destructuring to return the first 3 instructors. Use
//       the curriculum example as a reference.
//  */
//
// // instructora array above
// // const instructors = [
// //     'Daniel',
// //     'Vivian',
// //     'Sophie',
// //     'David',
// //     'Justin',
// //     'Fer',
// //     'Terrell'
// // ];
//
// const [j,y,z] = instructors;
// console.log(j);
// console.log(y);
// console.log(z);

//warm-up for 7/17/19************************************************
//rewrite this as an arrow function
//give greeting a default value of "Good Morning"
//give cohort a default value of "Betelgeuse"
//rewrite the return to use template strings instead of concatenation

const greeting = "Hello";

const goodMorning = (greeting = "Good Morning",cohort = "Betelgeuse") => {
    return `${greeting} ${cohort}!`;
};

console.log(goodMorning());
console.log(goodMorning(undefined, "Ceres"));

