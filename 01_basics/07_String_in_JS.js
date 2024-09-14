let myName = "Piyush";//by declearing String Using This method it  will define decleare String As An String;
let repoCount = 22;

console.log(myName +" "+ repoCount);//this is the old method of Concatinating String;

console.log(`My Name is ${myName} and my repo Count is ${repoCount}`);//this is the morden Mothde to Concatinating String;

let gameName = new String('Piyush-PP');//by declearing String Using This method it  will define decleare String As An Object;

console.log(gameName);
console.log(typeof gameName);//output =>Object;
console.log(typeof myName);//output =>String;


console.log(gameName[2]);//by using key [0] we can access any member of the Given Element; 

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('s'));


let newString = gameName.slice(0,4);

console.log(newString);//use to slice the String just before the last index given.

let AnotherString = gameName.slice(-8,6);//here we can add negative value to slice the string from reverse.
console.log(AnotherString);



let newStringOne = "      Piyush      ";
console.log(newStringOne);
console.log(newStringOne.trim());//use to remove White Spaces;//there are Also trimStart AND trimEnd to remove white Spaces from Start and End;

console.log(newStringOne.trimStart());//use to remove White Spaces From Start;
console.log(newStringOne.trimEnd());//use to remove White Spaces From End;




let newUrl = "https//piyushatwork/%20reverse.com";

console.log(newUrl);


console.log(newUrl.replace('piyush','harry'));


console.log(newUrl.includes('jatin'));//yuse to check the give variable is present or not;
console.log(newUrl.includes('piyush'));//yuse to check the give variable is present or not;



console.log(gameName.split('-'));//use to split every words/elements on the Give input;



console.log(gameName.blink());/*blink(): string
                                Returns a <blink> HTML element
                                @deprecated — A legacy feature for browser compatibility*/


 