let first = 100;
// const second = 200;
// var third = 300;//var is a Global Scope Variable So Its Value is Accessable From Any Where In the Code;


if (true) {
    let first = 10;
    const second = 20;
    var third = 30;
    console.log("Inner: ", first);
    function addNum(){
        
    }
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

console.log(first);
// console.log(second);
console.log(third);// here var is used so that its Original Value came From Inside the loop






// Nested Scope;

function outer(){
    let username = "Piyush";
    function inner(){
        let website = "E-Cart Design";
        console.log(username);
    }
    // console.log(website);
    inner();
}
outer();


if (true){
    let Username = "Piyush";
    if(Username === "Piyush"){
        let Website = "Git-Hub";
        console.log(Username + " " +Website);
    }
    // console.log(Website);/*This is Not Accessable coz its is Not Present Inside its Scope;*/
}
// console.log(Username);/*This is Not Accessable coz its is Not Present Inside its Scope;*/

// *********************************Intresting*************************************
/*There Are TWom Ways In Js Two Create Fnction */

// 1. Normal == Here we only Decleare The Variaable ;
adddOne(5);//here no error will be Shown.
function adddOne(Value){
    return Value + 1;
}
// 2. Expression/Variable Function == Here We Decleare And Hold The Variable At the Same Time;

// addTwo(5);//here error Will Be Shown ;
let addTwo= function (value){
    return value + 2;
}
addTwo(5);//Here The Error will not Apper;