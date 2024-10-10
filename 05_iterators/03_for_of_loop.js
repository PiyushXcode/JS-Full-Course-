//For Each Loop 
 
["" , "" , ""]//Arrays of String;

[{} , {} , {}]//Array of Object;



//For Of Loop

/*The for...of loop is a type of iteration statement in JavaScript that allows you to iterate over values sourced from an iterable object. An iterable object is an object that implements the Iterator protocol, such as arrays, strings, maps, sets, and typed arrays.*/
let arr = [1, 2, 3, 4, 5, 6]
for (const num of arr) {
    // console.log(num);
}


let greetings = "Hello User";

for (const greet of greetings) {
    if(greet == " "){
        continue;
    }
    // console.log(` Each letter Of Hello User :${greet}`);
}


//Maps

/*The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.*/

let map = new Map()

map.set('IN', "India");
map.set('USA', "United States America");
map.set('UK', "United Kingdom");
map.set('AUS', "Australia");
map.set('GMY', "Germany");
map.set('FR', "France");

// console.log(map);


for (const [key, value] of map) {
    console.log(key , ":-" , value);/*square bracket is use to DeStructure the Array created By Map;*/
}


//Note :- Maps are iteratable but Objects is Not iteratable ;


