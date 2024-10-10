let coding  = ['Js', 'ruby', 'java', 'cpp', 'phython'];



// Note :-  forEach Loop does Not return Any kind of value ;
//          it only executes the code inside the callback function for each element in the array.
// let code = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })

// console.log(code);








//Filter

let value = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10];




// let nums = value.filter( (num) => num > 5)

// console.log(nums);


// let nums = value.filter( (num) => {
//     return num > 4
// } );

// console.log(nums);



let newArr = [];

value.forEach((num) => {
    if(num > 5){
        newArr.push(num);
    }
})

console.log(newArr);





// ***********************************Example*******************************



let books = [
    {
        title: 'Book 1', genre: 'History', publication: '1981', edition: '1999',
    },
    {
        title: 'Book 2', genre: 'Fiction', publication: '1991', edition: '2001',
    },
    {
        title: 'Book 3', genre: 'Non-fiction', publication: '2000', edition: '2004',
    },
    {
        title: 'Book 4', genre: 'Fiction', publication: '2006', edition: '2014',
    },
    {
        title: 'Book 5', genre: 'Science', publication: '2000', edition: '2008',
    },
    {
        title: 'Book 6', genre: 'English', publication: '2014', edition: '2020',
    },
    {
        title: 'Book 7', genre: 'Urdu', publication: '1998', edition: '2005',
    },
    {
        title: 'Book 8', genre: 'Hindi', publication: '1995', edition: '2024',
    },
]

let myBookShelf = books.filter((bk) => { 
    return bk.genre === 'Urdu';
})

myBookShelf = books.filter((bk) => {
    return bk.publication >= 2000
})

myBookShelf = books.filter( (bk) => {
    return bk.publication === "2000" && bk.genre === 'Non-fiction'
})

console.log(myBookShelf);



