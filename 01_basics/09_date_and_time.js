//Here We'll Learn About Date AND Times

let myDate = new Date();
console.log(myDate);/*gives the Output in very inConvineant way(output => 2024-09-15T17:18:00.568Z);*/


console.log(myDate.toString());//now output is in String and its Quite Readeable(output => Sun Sep 15 2024 22:48:00 GMT+0530 (India Standard Time));
console.log(myDate.toDateString());/*its Show it exact date in string(output => day : month date : year );*/
console.log(myDate.toISOString());/*gives the Output in very inConvineant way(output => 2024-09-15T17:21:43.853Z)*/
console.log(myDate.toJSON());/*gives the Output in very inConvineant way(output => 2024-09-15T17:21:43.853Z);*/
console.log(myDate.toLocaleDateString());/*give output in very Simple and Understandable Way (output => 15/9/2024)*/
console.log(myDate.toLocaleString());/*give time and date Seperatly using Comma (output => 15/9/2024, 10:55:26 pm) */
console.log(myDate.toTimeString());/*(output => 22:57:06 GMT+0530 (India Standard Time)) */
console.log(myDate.toUTCString());/*(output => Sun, 15 Sep 2024 17:27:55 GMT) */
console.log(myDate.getTimezoneOffset());/*Gets the difference in minutes between Universal Coordinated Time (UTC) and the time on the local computer. */




console.log(typeof myDate);//(output => object);





let myownDate = new Date(2004, 1, 22);//to find date entered by User;
console.log(myownDate.toLocaleString());


let myCreatedDate = new Date(2005 ,1, 19, 13, 45, 55);//to find date and time Entered by user;
console.log(myCreatedDate.toLocaleString());



let newDate = new Date("2007-12-20")//Its YYYY-MM-DD Formate;
console.log(newDate.toDateString());//generally not Prefered in India


let AnotherDate = new Date ("03-17-2005");//Its MM-DD-YYYY Formate;
console.log(AnotherDate.toLocaleString());//generally Prefered in India



let TimeStramp = Date.now();

console.log(TimeStramp);
console.log(AnotherDate.getTime());//this is the Value in milliSeconds


console.log(Math.floor(Date.now()/1000));//now its Converted In Seconds;





let DateOne = new Date();

console.log(DateOne);
console.log(DateOne.getMonth() +1);
console.log(DateOne.getDay() + 1);
console.log(DateOne.getHours());
console.log(DateOne.getMinutes());


console.log(DateOne.toLocaleString('default',{
        weekday:"long",
        year:"numeric",
        month:"short",
        day:"numeric",
        timeZone:"IST",
}));

