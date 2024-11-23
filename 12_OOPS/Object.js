//About Object


function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 5;

console.log(multiplyBy5(3));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser( usesrname , score){
    this.usesrname = usesrname
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}
// let chai =  createUser("chai" , 25);//This will show error coz New is Missing and new is used to create empty Object 
let chai = new createUser("chai" , 25);
let tea =  createUser("tea", 259);


chai.printMe();




/*Uses and Functionality of the new Keyword in JavaScript:
Creates a New Object:

The new keyword creates a new, empty object.
Binds this to the New Object:

Inside the constructor function or class, this refers to the newly created object.
Executes the Constructor Function:

The new keyword calls the constructor function or class with the provided arguments.
Inherits from Constructor’s Prototype:

The new object inherits properties and methods from the constructor's prototype.
Automatically Returns the New Object:

If no object is explicitly returned from the constructor, the new object is automatically returned.
Creates Instances of Classes (ES6):

Used to instantiate classes in JavaScript.
Creates Instances of Built-in Objects:

Used with built-in objects like Array, Date, RegExp, etc.
Enables Inheritance:

Allows objects to inherit methods from their constructor’s prototype.
Facilitates Object-Oriented Programming:

Essential for implementing object creation patterns in OOP.
Supports Custom Constructor Functions:

Used to create instances from user-defined constructor functions. */




/* ################################## IMPORTANT ######################################*/

/*Here's what happens behind the scenes when the new keyword is used: 

A new Object is created is created: the new keyword initiates the creation of a new JavaScript object . 


A Prototype is linked : The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor 's protype. 

The constructor is called : The Constructor function is called with the specified agrument and this is bound to the newly created object . If no expicit return value is specified from the constructor , JavsScript assumes this, the newly created object , to be the intended return value. 

the new object is returned :  After the constructor function  has been called , if it doen't return a non-primitive value (object, array, function , etc) ,the newly created object is returned. 

*/

