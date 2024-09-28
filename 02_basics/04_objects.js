//Object Single Ton 

// let tinderUser = new Object();//It Will Produce SingleTon Object ;

let tinderUser = {};//it Will Create An Object;
tinderUser.id = "123abc";
tinderUser.name ="Piyush";
tinderUser.isLoggedIn = false;
console.log(tinderUser);


let regularUser = {
    email: "piyushatwork2233@gmail.com",
    name: "Piyush",
    isLoggedIn: false,
    login:{
        username: {
            firstName: "Piyush",//we can Create object within Object;
            lastname : "Prasad",//we can Create object within Object;
        }
    }
}

console.log(regularUser.login);    




let obj1 = {1: "a",2:"b",3: "c"};
let obj2 = {4: "a",5:"b",6: "c"};

// let obj3 = Object.assign({},obj1,obj2);//this is A way of Merging Object in An Array;
let obj3 = {...obj1,...obj2};//this {...obj1,...obj2} is use to Combine two or more Objects into Single unit;

console.log(obj3);





console.log(tinderUser);

console.log(Object.keys(tinderUser));//here the OutPut Data Type is Array;/*Here Only Keys Will be Shows As Output*/
console.log(Object.values(tinderUser));//here the OutPut Data Type is Array;/*Here Only Values of The Keys Will be Shows As Output*/

console.log(Object.entries(tinderUser));/*this Creates array of each and Every Elements of an Object in which first one will be the key and Second One will be the Value of that key*/

console.log(tinderUser.hasOwnProperty("isLoggedIn"));//This Use to Check Wheather The User has That Property or Not;








//De-Structuring

let course = {
    courseName : "JS Course From YT",
    courseDuration : "3 Months",
    courseInstructor:"Hitesh Chaudhary",
}


console.log(course.courseInstructor);//This is One Way to Extract Object Information;

//But There is Another Way to Extract Object Information using De-Structuring 

let {courseName : name,courseInstructor : Instructor,courseDuration : Time} = course

console.log(Time);
console.log(name);
console.log(Instructor);







