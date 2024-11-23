
/*Here's we are going to learn about ProtoType's */


// let myName = "Piyush"

// console.log(myName.length);




let things = ["Pen" , "Keyboard" , "Mouse" , "Table"];

let thingsPoweer = {
    "Pen" : "Write" ,
    "Keyboard" : "Type" ,
    "Mouse" : "click" , 
    "Table" : "Sit" ,

    gettableFeature: function(){
        console.log(`The Feature of Table is ${this.Table}`);        
    }
}

Object.prototype.piyush = function(){
    console.log("Hello Piyush");
}

// thingsPoweer.piyush();


// things.piyush()


//Inheritance 

let user ={
    name : "Piyush" ,
    age : 20 ,
    loggedIn: true,
}


const Teacher = {
    makeVideo: true,
}

let teachingSupport = {
    isAvaliable : false,
}

let TASupport ={
    makeAssignment:"JSCourse",
    fullTime:true,
    __proto__: teachingSupport,//old and Outdated, no one use thisa syntax but its there 
}

Teacher.__proto__ = user//old and Outdated, no one use thisa syntax but its there 

//morden Syntax 

Object.setPrototypeOf(teachingSupport ,Teacher)




let newUserName =  "Piyush Prasad                                   ";

String.prototype.trueLenght = function(){
    console.log(`${this}`);
    console.log(`The True Length of String is : ${this.trim().length}`);
}

newUserName.trueLenght();
"Hazmola".trueLenght();