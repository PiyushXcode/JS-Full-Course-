
/* The Sepration is Based on the how data is Stored and Being accessd in the Memory
there are two Types Of Data types :- */

//1. Primitive Data Types
//2. Non-Primitive Data Types



// Premitive Data Type : {They Are basically call by Value Datatypes. (Call by Value is the Method in Which the Changes in being Done over the Copy/refrence of the Original Value And The Change Does Not Get Reflected Back to The Oringial Value.)}


// Premitive Data Types are of 7 types :-
// 1. Number => 1,2,3...;
// 2. String => "Piyush" ....;
// 3. Boolean  => true/false;
// 4. BigInt => 2^53 (to Store bigger interger value);
// 4. Null => empty Space;
// 5. Undefined => value is not defined ;
// 6. Symbol => Make any value Unique ;



const score = 100;
const scoreValue = 303;

const isLogged = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);// her the Output Will be False as the Symbol is Use for making any value Unique;


let bigNumber = 23767528n;//(use n after any number to transform any number into bigint)
console.log(typeof bigNumber);




// Non-Premitive Data Type : {They are Basically Call By Reference Data Type. (Call By Reference is the method in which the Original Parameters gets internally Connected with The formal parameters and Any Changes in the Formal Parameters Get Refelected Back To the Original Parameters.)}


//Non-Primitive Data Type are

//Arrays;
//Object;
//Set;
//Map;
//WeakMap;
//WeakSet;
//Date;
//RegExp;
//Function;
//Promise;
//Error;
//Int8Array;
//Uint8Array;
//Uint8ClampedArray;
//Int16Array;
//Uint16Array;
//Int32Array;
//Uint32Array;
//Float32Array;
//Float64Array;
// BigInt64Array;
// Uint64Array;
// TypedArray;
// ArrayBuffer;
// DataView;


// 3. Set => It is a collection of unique elements. It is denoted by curly
// brackets {} and elements are separated by comma.
// 4. Map => It is a collection of key-value pairs. It is denoted by
// curly brackets {} and key-value pairs are separated by comma.
// 5. WeakMap => It is a collection of key-value pairs. It is denoted
// by curly brackets {} and key-value pairs are separated by comma.
// 6. WeakSet => It is a collection of unique elements. It is denoted by
// curly brackets {} and elements are separated by comma.
// 7. Date => It is used to get the current date and time. It is den
//oted by Date() function.
// 8. RegExp => It is used to search for a pattern in a string. It is
// denoted by RegExp() function.
// 9. Function => It is a block of code that can be executed multiple times.
// It is denoted by function keyword.
// 10. Promise => It is used to handle asynchronous operations. It is
// denoted by Promise() function.
// 11. Error => It is used to handle errors. It is denoted by Error()
// function.
// 12. Int8Array, Uint8Array, Uint8ClampedArray, Int16
// Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float
// 64Array, BigInt64Array, Uint64Array, TypedArray, ArrayBuffer, DataView =>
// These are used to work with arrays and buffers. They are denoted by their
// respective constructors.
// 13. Symbol => It is a primitive data type that is used to create unique
// symbols. It is denoted by Symbol() function.
// 14. BigInt => It is a primitive data type that is used to represent
// large integers. It is denoted by BigInt() function.
// 15. JSON => It is a string format for exchanging data between a web server and a
// web application. It is denoted by JSON() function.


// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean


//Array 
/* An array is a collection of same type  data elements stored in a single variable.
 It is denoted by square brackets [] and elements are separated by comma.*/

let Array = ["shakitman", "naagraj", "doga"];
console.log(Array);

//objects 
/* 2. Object => It is a collection of key-value pairs. It is denoted by
curly brackets {} and key-value pairs are separated by comma.*/
let object = {
    name: "shakitman",
    age: 20,
    address: "delhi"
};
console.log(object);


//Function 
/* 3. Function => It is a block of code that can be executed multiple times.
It is denoted by function keyword. It returns function data type but its Called as Object Funtion.*/

const myFunction = function function1() {
    console.log("Hello World!");
}
 
console.log(myFunction);
console.log( typeof myFunction);

//Link To Study
//https://262.ecma-international.org/5.1/#sec-11.4.3