let literally = {
    username :"Piyush",
    age: 20,
    email: "piyushkumar9337@gmail.com",
    loginCount: 10,
    signedIn : true,

    getUserDetails : function(){
        // console.log('Got the User Details');
        /* here {this} is used to access the outer Object/variable */
        // console.log(`"Username:" ${this.username}`);
        console.log(this);
    }
}

console.log(literally.loginCount);
console.log(literally.getUserDetails());
