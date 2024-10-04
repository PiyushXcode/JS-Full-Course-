let User ={
    userName : "Piyush",
    Age : 23,
    userMessage : function (){
        console.log(`${this.userName} , Welcome To The Site`);
        console.log(this);
        
    }
}
// User.userMessage();
// User.userName = "Raj";
// User.userMessage();
console.log(this);//it will retrun empty Set of Values;

/*Most Asked Interview Question */
// 1. What is the difference between call, apply and bind methods in JavaScript?
// 2. What is the difference between == and === in JavaScript?
// 3. What is the difference between null and undefined in JavaScript?
/* 4. What Is the Global Object Present In the Browser ? ==> Windows Object Therefore We can Able to Access All the Features and Events of Windows;*/ 


// *********************************ARROW FUNCTION**********************************************************
//  function one(){
//     let user = "Piyush";
//     console.log(this.user);
//  }
// one();


// let One = function(){
//     let UserName = "Piyush";
//     console.log(this.UserName);
// }
// One();


// let One = () => {
//     let UserName = "Piyush";
//     console.log(this.UserName);
// }
// One();


//This Is Basic Arrow Function /Explisit Retun ;
// let addTwo = (num1 ,num2 ) => {
//     return num1 + num2; //here Curly Braces is Used ThereFore we Have to use Return Key Word;
// }


//This is Implisit Return ; //here Curly Braces is not Used ThereFore we do not Have to use Return Key Word;
// let addTwo = (num1 ,num2 ) => num1 + num2;//here we Wright all the Value at Single line To return Implisit Value;


//this is New Way of Wrighting Return As The 
// let addTwo = (num1, num2) => (num1 + num2);//here Curly Braces is not Used ThereFore we do not Have to use Return Key Word;



//here we Are Returning Object in Arrow Funtion 
let addTwo = (num1,num2) => ({UserName : "Piyush"}); 

console.log("Result:", addTwo(5,9));
