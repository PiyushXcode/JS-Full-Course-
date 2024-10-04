/*Immediately Invoked Function Expressions (IIFE) */
// Immediately Invoked Function Expressions (IIFE) are functions that are defined and called immediately, And to Prevent it From Being Polutted  by Global Variable We Use IIFE;


(function chai(){
    //This Is Named IIFE;
    console.log(`DB CONNECTED`);
})();
// () () ==>First Paremthesis use to Wrap the funtion and Second Parenthesis is use to Immediately Return That Funtion ;


( (UserValue) => {
    //This Is Simple IIFE; 
    console.log(`DB ${UserValue} CONNECTED SUCCESSFULLY `);
}) ("Piyush");