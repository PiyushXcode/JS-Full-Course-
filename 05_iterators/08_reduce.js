

//Reduce Js


//General Syntax For Reduce ;


// arr.reduce(callback(accumulator, currentValue[, index[, array]]), [, initialValue])

/*Array.reduce (callBacks: (Accumalotar, current Value) => {return (Operation to be performed) }, Initival Value)*/

/*Array<number>.reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number, initialValue: number): number (+2 overloads)*/

let numBers = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10]
// let iniVal = 100;
// let newNumber = numBers.reduce((prev , currentValue) => {
//     console.log(`Accumalotor:${prev},Current Value:${currentValue}`);
//     return prev + currentValue;
// },iniVal)

// console.log(newNumber);



//This Is Also A Correct formate but Its Short And Parenthesis is Not Used Here;
// let NewNum = numBers.reduce( (Acc ,curval) => Acc + curval ,0 )

// console.log(NewNum);




let ShoppingCart = [
    {
        item: "Js Course",
        price: 1999,
    },
    {
        item: "React Course",

        price: 1599,
    },
    {
        item: "Web Dev",
        price: 999,
    },
    {
        item: "Dev Ops",
        price: 399,
    },
]


let My_Total_Price = ShoppingCart.reduce( (Acc,item) => Acc + item.price,0 );

console.log(My_Total_Price);


