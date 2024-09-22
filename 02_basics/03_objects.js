//Objects in JavaScript;
/*SingleTon :- a Singleton is a design pattern that ensures only one instance of an object is created and provides a global point of access to it.*/

// Object.create /*this is the way to make Object in which SingleTon is Created And the Method is called Constructor;*/

/*When any thing is Defined in littrels it Does Not make Any Singleton
whereAs it is Define using constructor it makes Single Ton*/

// Object literals

const mySymbl = Symbol("Key1");//Declearing SYMBOL Here;

let JsUser = {
    /*  Key  :  Value */
        name : "Piyush",
        "Full Name" : "Piyush Prasad",
        Roll_No: 1212,
        [mySymbl] : "mykey1",//accessing Symbol Here;
        Subject: "Computer",
        age : 20,
        email : "piyushatwork@gmail.com",
        loggedIn : true,
        lastloggedinDays : ["Monday","Tuesday","Wednesday","Thursday","Friday"],
}   


/*Now Here there are Two Ways Two Access Objects*/

/*First Way*/
console.log(JsUser.name);//Access by using Dot(.);
/*Second Way*/
console.log(JsUser["name"]);//Access by Using Square Brackets([]);
console.log(JsUser["Full Name"]);

//Accessing Symbol Here; 
console.log(JsUser[mySymbl]);



// To Change the Value Object;

JsUser.email = "Piyush@microsoft.com";
console.log(JsUser.email);

// Object.freeze(JsUser);//using .freeze will freeze the Object and Dosn't able to Change the Values;

JsUser.email = "Piyush9337@gmail.com";//here the email will not change;
console.log(JsUser);



// Adding Functoion in Objects 
JsUser.greetings = function(){
    console.log("Hello, How are you ?");
}
console.log(JsUser.greetings());//here it return the console.log value ;
console.log(JsUser.greetings);//here it returns a Function with anonymous returning;



JsUser.greetings2 = function(){
    console.log(`HeLlo Js User , ${this["Full Name"]}`);//access the Object Data using this. ;
}
console.log(JsUser.greetings2());//this will Access the Data From the Referece;



