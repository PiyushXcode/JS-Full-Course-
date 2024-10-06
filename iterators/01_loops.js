// For 

// Basic Syntax 
// for (Iterator; Condition ; Increment/decrement){
//     loop Body;
// }

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(i);
}

for(let i = 1 ; i <= 10 ; i++){
    console.log(`The Table of ${i}`);
    for(let j = 1 ; j <= 10 ; j++){
        // console.log(`the inner loop ${j} and the outer loop ${j}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    }    
}



// let myArray = ["IronMan" , "BlackPanther" , "Hulk" , "SpiderMan" , "Thor" , "CaptianAmerica" , "Venom" , "Wolvrine" , "DeadPool"];
// console.log(myArray.length);
// for (let i = 0; i < myArray.length; i++) {
//     const element =myArray[i];
//     console.log(element);
// }






//break And continue;

for (let i = 0; i <=20; i++) {
    const element = i;
    if (i == 10){
        console.log(`Deacted 10`);
        break;
    }
    console.log(`the Value of i is ${i}`);
}
for (let i = 0; i <=20; i++) {
    const element = i;
    if (i == 10){
        console.log(`Deacted 10`);
        continue;
    }
    console.log(`the Value of i is ${i}`);
}
