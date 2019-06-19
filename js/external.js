"use strict";

console.log("Hello from external JavaScript");

alert('Welcome to my Website!');
var userColor = prompt("What is your favorite color?");
alert("What a coincidence, " + userColor + " is my favorite color too!");

// Exercise 3.1
var littleMermaidRental = Number(prompt("How many days are you renting The Little Mermaid?"));
var brotherBearRental = Number(prompt("How many days are you renting Brother Bear?"));
var herculesRental = Number(prompt("How many days are you renting Hercules?"));

var total = (littleMermaidRental + brotherBearRental + herculesRental) * 3;

alert("You owe the Hollywood Video: $" + total.toFixed(2));

// Exercise 3.2
var googleRate = 400;
var amazonRate = 380;
var fbRate = 350;

var googleHours = Number(prompt("How many hours did you work for Google this week?"));
var amazonHours = Number(prompt("How many hours did you work for Amazon this week?"));
var fbHours = Number(prompt("How many hours did you work for Facebook this week?"));

alert("You earned $" + ((googleHours * googleRate) + (amazonHours * amazonRate) + (fbHours * fbRate)).toFixed(2));

// Exercise 3.3
var classTime = prompt("What time is the class?");
var noScheduleConflict = !confirm("Does the student have a class at " + classTime);

var maxClassSize = Number(prompt("What's the maximum class size?"));
var studentsEnrolled = Number(prompt("How many students are currently enrolled?"));
console.log(studentsEnrolled < maxClassSize);
alert("Student can enroll in class: " + (noScheduleConflict && (studentsEnrolled < maxClassSize)));

// Exercise 3.4
var isPremiumMember = confirm("Is the customer a Premium Member?");
var numberItemsBought = Number(prompt("How many items did the customer buy?"));
var isOfferValid = confirm("Is this coupon still good?");

alert("Customer coupon valid: " + (isOfferValid && (isPremiumMember || numberItemsBought >= 2)));