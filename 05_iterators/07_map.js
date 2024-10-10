//Map

//Basically Map Is Use for Explicetally And Implicetally return and Operation we Perform Over That Function, It Returns the Desired  Value;

//Filter is A True And False Returner Which basically return the true or False Value ;

let numBers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newnum = numBers.map( (num) => {
//     return num + 10;
// })
// console.log(newnum);
  


/*This Is Using forEach */

// let arr= []

// let NewNum = numBers.forEach ( (num) => {
//     arr.push(num + 10);
// } )

// console.log(arr);





//Chaining 


let MyNumbers = numBers.map( (num) =>{
    return num * 10
} ).map( (num) => {
    return num + 11;
}).filter( (num) => num > 100 )

console.log(MyNumbers);
