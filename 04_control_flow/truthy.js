//Truthy in Js;
let Usermail = "piyush@23.ai";//if there is empty string it will Provide Falsy Value whereas if Threre is Empty array it will Provide a truthy value;

if(Usermail){
    console.log(`Got The user Mail`); 
}else {
    console.log(`Don't Have User Mail`);
}


//Falsy Value 
// false ,0 ,-0 , BigInt 0n, "", null, undefined, NaN; these are all falsy value Other Then These all are Truthy Value;

// Truthy Value
//true, "0", 'false', " ", [], {}, function(){} ;(If we Write 0 || False inside '' or "" it consider as Truthy value);


// To Check Weather the Array is Empty or Not;

// let arr = [];
// if(arr.length === 0){
//     console.log(`Array is Empty`);
// }

//To Check weather The Object Is Empty or Not;

// let newObj = {};
// if(Object.keys(newObj).length === 0){
//     console.log(`Object is Empty`);
// }



///Nullish Coalescing Operator (??) :  null undefined

let val1 ;
// val1 =5 ?? 20;
// val1 = null ?? 20;
// val1 = undefined ?? 22;
val1 = null ?? 23 ?? 33;


console.log(val1);




//Turniary Operator 

// condition ?true : false ;


let iceTeaPrice = 100;

(iceTeaPrice <= 80 ) ? console.log('Price is Less than 80'): console.log('Price is More than 80');
;



