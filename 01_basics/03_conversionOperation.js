// let score = "240";//output =>string;
// let score = null;//output =>object;
// let marks = "240gha";//output =>string;
// let marks = undefined;//output =>undefined;
// let score = true/false;//output =>boolean;
// let marks = false;//output =>boolean;
// let score = "Piyush";//output =>string;


// console.log(typeof score);//method to display the data type .
// console.log(typeof marks);//method to display the data type .

// console.log(typeof (score));//method to display the data type .
// console.log(typeof (marks));//method to display the data type .

// let value_in_Number = Number(score);
// let marks_in_Number = Number(marks);

// console.log(typeof value_in_Number);
// console.log(typeof marks_in_Number);
// console.log(value_in_Number);
// console.log(marks_in_Number);


// "33" => string converts to number;
//"33abc" => NaN (random mixer can't be converted into strings);
//true => 1 | false => 0;


// let isLoggedIn = 1;

/*Another Method to Check which type of Data is Used;*/
// let isBooleanLoggedIn = Boolean(isLoggedIn);
// console.log(isBooleanLoggedIn);


// console.log(Boolean(isLoggedIn)); 


// let toCheck = "Piyush";
// console.log(Boolean(toCheck));
// let checked = Boolean(toCheck);
// console.log(checked);

//1 => true | 0 => false ;

//" " => false | "Piyush" => true;


// let SomeNumber = 22;

// let StringCheck = String(SomeNumber);
// console.log(StringCheck);
// console.log(typeof StringCheck);


//*******************************Oprerator************************************/

// basic Opreration that we Know whats its Output;

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);


// let str1 = "Hello";
// let str2 = " Piyush";

// let str3 = str1+str2;
// console.log(str3);



// console.log('1' + 2);
// console.log(1 + '2');
// console.log(1 + 2 + '2');//here first value is number that's why its considered  value as number and Added its As number;
// console.log('1' + 2 + 2);//here first value is string that's why its considered  value as String and Added its As String;


console.log(2 + 3 * 4 / 5); //tho it will give the Solution but its Not the Proper way to write  the  code as ,In industry The code Should be proper and readable and Understandable;

console.log(2 + (3 * 4) / 5); //this is the proper way to write a code;

// console.log(true);
// console.log(+true);//output => 1
// console.log(true+);//output => shows error;



let num1 ,num2 ,num3;

num1 = num2 =num3 =2+2;//code is Not readable;


let gameCounter = 100;
// gameCounter++;
++gameCounter;
console.log(gameCounter); //output => 101;


let x = 3;
const y =x++;//PostFix = Increse the value After Execution

console.log(`x:${x},y:${y}`);
//excpeted output x:4 , y:3;

let a= 3;
const b = ++a;//PreFix = Increse the value Before Execution
console.log(`a:${a},b:${b}`);
//excepted output => a:4 , b:4;



// link to Study
// https://tc39.es/ecma262/



