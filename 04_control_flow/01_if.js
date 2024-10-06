//If Statments

// if(true){
//     console.log('Hello  World');
// }

// let UserLoggedIn = true;

// if(UserLoggedIn){
//     console.log('User is logged in');
// }


let tempIs = 27;
let tempShouldBe = 25;

if(tempIs == tempShouldBe){
    console.log('Great Day For Picnic');
}else{
    console.log('Stay At Home');
}


let score = 500;

if(score > 100){
    let power = "fly";
    console.log(`User Get ${power}ing Power`);
}else{
    let power = "run";
    console.log(`User Get ${power}ing Power`);
}

let balance = 1000;

// if(balance < 1000){
//     console.log(`Amount is Insufficient`);
// }else {
//     console.log(`Amount is Sufficient`);
// }


// if (balance < 500){
//     console.log(`Amount is Less Then 500`);
// }else if (balance < 750){
//     console.log(`Amount is Less Then 750`);
// }else {
//     console.log(`Amount is Greater then 750`);
// }



let UserLoggedIn = true;
let debitCard = true;
let LoggedInFromGoogle = true;
let LoogedInFromEmail = false;


if(UserLoggedIn && debitCard && 2 == 3){
    console.log(`User Can Buy This Course`);
}else if(LoggedInFromGoogle || LoogedInFromEmail){
    console.log(`User Logged In Using Its Email And Google`);
}
