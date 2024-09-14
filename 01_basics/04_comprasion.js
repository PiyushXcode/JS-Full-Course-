//Here the Comparision is Easy and predictiable ;
//Here the Answer will be definitaly true/false;


// console.log(2 > 3);
// console.log(2 < 3);
// console.log(2 <= 3);
// console.log(2 >= 3);
// console.log(2 != 3);
// console.log(2 == 3);



//here The Result are Correct But the Answer could Be UnPrectidable;

// console.log("2" > 1);
// console.log("2" > 3);
// console.log(null > 0);
// console.log(null == 0);
// console.log(null < 0);
// console.log(null >= 0);
// console.log(null <= 0);






//The reason is that an Equality check == and comparisions >,<,>=,<= works Differntly;

// comparision Converts null to a Number ,treating it as 0.
// that's why (3) null >= 0 is true and (1) null > 0 is False.



//here In every case undefined will Give False 

// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined >= 0);
// console.log(undefined <= 0);
// console.log(undefined == 0);


 



// === (Strict Check) checks both the value and the type of the variables.

console.log("2" === 2);