alert("Welcome to JavaScipt");
let name=prompt("What's your name?");
alert("Hello"+ " " + name);
var first_name=prompt("first name");
var last_name=prompt("last name");
alert(first_name+ " " +last_name);
let hobby=prompt("What's your favourite hobby?");
alert("My favourite hobby is"+" "+hobby);

let yearOfBirth=parseFloat(prompt("What's your birth year?"));
let currentYear=parseFloat(prompt("What's your current year?"));
let age=currentYear - yearOfBirth;
alert(`Your age is ${age}`);

let length=prompt("Enter the length of the rectangle");
let width=prompt("Enter the width of the rectangle");
let total=length*width;
alert(`The area of the rectangle is ${total}`);
// Variables that are legal in Javascript
alert("These are the legal variable: var ROSE, var flower_rose, var sunFlower")

// Variables that are illegal in JavaScript
alert("These are the illegal variable: var 1 , var .a ,var a.1 and var a/");

age=20;
alert(`My age is ${age}`);
var age1=24
alert("My friend age is"+ " "+age1);

var first_number=parseFloat(prompt("Enter first number"));
var second_number=parseFloat(prompt("Enter second number"));
total=first_number+second_number;
alert("The total sum of two number is "+total);

var a=6;
var b=8;
total=a*b;
alert(`The result of multiplying 6 and 8 is ${total}`);

a=17;
b=5;
total=a % b;
alert(`The remainder is ${total}`);

yearOfBirth=prompt("Enter your birth year");
currentAge=2024;
age=currentAge - yearOfBirth;
alert(`Your age is ${age}`);


var e=parseFloat(prompt("Enter first number"));
var f=parseFloat(prompt("Enter second number"));
total=e+f;
total1=e-f;
total2=e*f;
total3=e/f;
total4=e%f;
alert(`Sum ${total}, Difference ${total1}, Product ${total2}, Division ${total3}, Remainder ${total4}`)



