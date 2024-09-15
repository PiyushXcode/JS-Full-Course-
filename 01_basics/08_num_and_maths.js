let score = 400;

console.log(score);



let balance = new Number(870);

console.log(balance);

console.log(balance.toString());//converts number to String; 
console.log(typeof balance.toString());//output => String;
console.log(balance.toString().length);//as now its a String it will access all the Property of String.
console.log(balance.toFixed(2));//toFixed() is use to fixed 2 value after Decimal.; 
                                //Output => 870.00;


let NewNumber = 101.92;
console.log(NewNumber.toPrecision(3));/*(method) Number.toPrecision(precision?: number :string
                                        Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

                                        @param precision — Number of significant digits. Must be in the range 1 - 21, inclusive.*/



let amt = 10000000;
console.log(amt.toLocaleString());/*A locale string, array of locale strings,Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.*/
 



//+++++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++++++++


// =>Basically its all Mathamatical Function which lies within Math function....
// eg :- Math.random(),Math.ceil(),Math.floor(),Math.sqrt()...etc;


console.log(Math);

console.log(Math.abs(-87));//abs use to convert any negetive Number to Positive number;



console.log(Math.ceil(87.5));/*ceil() use to convert any decimal number to Integer and gives the upper value from the given Digit;
eg :- 87.5 => 88*/

console.log(Math.floor(76.2));/*floor() is used to Convert decimal number to Integer and gives the lower value from the given Digit;
eg :- 76.2 => 76*/



console.log(Math.round(7.7191));//give the Round Of Value;

console.log(Math.sqrt(16));//gives the Square root of the given value;
console.log(Math.cbrt(125));//gives the Cube root of the given value;
 

console.log(Math.min(4.6,32,73,44.2,2.2));//gives the minimum Value;
console.log(Math.max(4.6,32,73,44.2,2.2));//gives the maximun Value;


console.log((Math.random()*10) + 1);/*Math.random() use to generate any random number between 0 to 1;*/




console.log(Math.ceil(Math.random()*10)+1);//use to get random value without Decimals;




let min = 10;
let max = 20;

console.log(Math.floor((Math.random() * (max-min + 1)) + min));




