function ShowMyName(){
    console.log('P');
    console.log('I');
    console.log('Y');
    console.log('U');
    console.log('S');
    console.log('H');
}
// ShowMyName //Before Parenthesis it will be Reference of the Function;
ShowMyName();//After Paremthesis it Will be Fucntions Execution


function addTwoNumber(num1, num2){//here passing value is Known as Parameters;
    console.log(num1 + num2);
}
addTwoNumber(32,8)//here passing Value Is Known As Arguments;


// function addNumbers(number1, number2){
//     let result = number1+number2;
//     return result;
// }

function addNumbers(number1,number2){
    return number1 + number2;
}

let result = addNumbers(55,11);
console.log("Result :",result);



function isLoggedIn(userName){
    return `${userName} just Logged In`;
}

let user = isLoggedIn('Piyush');
console.log(user);

// console.log(isLoggedIn("Piyush"));




// Here Use Of If Else 

// function user1(system = "7676"){
//     if(system === undefined){
//         console.log('Please Enter Valid User Id');
//         return;
//     }
//     return `System (${system}) is Logged In`;
// }

// console.log(user1());
function user1(system){
    if(system === undefined){
        console.log('Please Enter Valid User Id');
        return;
    }
    return `System (${system}) is Logged In`;
}

console.log(user1(8745));







function addCartItems(...num1){//this ...num1 is Called Rest operator Use to Bind the Value sinto Single Array;
    return num1;
}
console.log(addCartItems(54,900,1399));



let Items = {
    ItemName: "Realme Buds Wireless 3",
    Price: 1399,
}

function handleItems(anyItems){
    return`Item Name is ${anyItems.ItemName} and Its Price is ${anyItems.Price}`
}
// console.log(handleItems(Items));

console.log({
    ItemName: "Realme Buds Wireless 3 neo",
    Price: 999,
}); 




let NewArray = [450,800,555];

function returnValue(getArray){
    return getArray[1];
}

// console.log(returnValue(NewArray));

console.log(returnValue(NewArray));





