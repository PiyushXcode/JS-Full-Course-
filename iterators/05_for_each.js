//ForEach Loop 


let coding = ["C++", "JavaScript", "Java", "Ruby", "phython"];

// coding.forEach( function(value){
//     console.log(value);
// } ) 


// coding.forEach( (item) => {
//     console.log(item);
// } )


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);



// coding.forEach( (item, index, arr) => {
//     console.log(item ,index, arr);
// })


let myCoding = [
    {
        programmingLanguage : "JavaScript",
        pragrammingLanguageFile : "Js",
    },

    {
        programmingLanguage : "C++",
        pragrammingLanguageFile : "Cpp",
    },

    {
        programmingLanguage : "Ruby",
        pragrammingLanguageFile : "rb",
    },

    {
        programmingLanguage : "Java",
        pragrammingLanguageFile : "Java",
    },

    {
        programmingLanguage : "Swift",
        pragrammingLanguageFile : "Swift by Apple",
    }
]

 myCoding.forEach( (item, index) => {
    console.log(item.pragrammingLanguageFile, item );
 })

 