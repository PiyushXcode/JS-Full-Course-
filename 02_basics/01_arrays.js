// //ARRAYS

// let arr = [1, 2, 3, 4, 5, "Piyush", true];/*The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations. */
// console.log(arr);



let myArr = new Array(1,2,3,4,5);
// console.log(myArr[4]);


// myArr.push("Piyush");//use to Add elements in Array at Last;
// console.log(myArr);

// myArr.pop();//use to pop/delete the last element form the array;
// console.log(myArr);

// myArr.unshift(9);//use to add elements in front of Array;
// console.log(myArr);

// myArr.shift();//use to Remove to First Element from Array;
// console.log(myArr);


// console.log(myArr.includes(1));//to check the element is present in the Array Or Not; //returns data type Boolean;

// console.log(myArr.indexOf());//tells the Place of of Element in Array AND the value is Not Present Then it will show (-1);


// let NewArr = myArr.join();/*Basically it Converts Array into String and bind Them into a Single Unit sepreatd by Comma */

// console.log(myArr);
// console.log(NewArr);



//slice,splice

 console.log('A', myArr);

 let myn1 = myArr.slice(0,3);
 console.log(myn1);
 
 console.log('B' ,myArr);
 

 let myn2 = myArr.splice(1,3);
 console.log(myn2);
 console.log('C', myArr);
 

/*point to be Noted that the Main Difference b/w slice and Splice is that slice only provide the value within the range from Array and Do Not change the Original array WhereAs splice provide the value of the range from Array and Also maniuplate the Original Array.*/
 