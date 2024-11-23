// Here is Constructor Function

function Person (name , age , isElligable){
    this.name = name;
    this.age = age;
    if(age < 18){
        this.isElligable = false;
    }else {
        this.isElligable = true;
    }
    return this
}

let P1 =new Person("Piyush" , 20)
/*New is use to create a New Instance/ new Memory is Allocated for the Code */

//Steps 
//Step 1 /*New Key Word Creates a New Empty Object which is known as Instance */
//Step 2 /*Constructor function is called when ever a new KeyWord is declered */
//Step3 /*Collect all the argument and function and Pack/Inject it to the this keyWord */
//Step4 /*Now It Give to the User */
let P2 = new Person("Anushka" , 14)
console.log(P1);
console.log(P2);

