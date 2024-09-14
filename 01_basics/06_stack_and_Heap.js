//Stack(Premitive) AND Heap(Non-Primitve)

let myName = "Piyush";
let AnotherName = myName;

AnotherName = "Prasad";

console.log(myName);

console.log(AnotherName); 


let userOne = {
    name: "Piyush",
    age: 20,
    Email:"piyush@google.com",
    employee_id: 7287009,
}


let userTwo = userOne;

userTwo.Email = "PiyushKumar@gmail.com";

userTwo.age = 19;

console.log(userOne.Email);
console.log(userTwo .Email);
console.log(userOne.age);
console.log(userTwo.age);





