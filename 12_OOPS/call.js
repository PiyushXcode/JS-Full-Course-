

//Here's About Call 


function setUsername(username){
    //complex DB calls
     this.username= username;
}

function createUser(username , email , password){   
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

let user = new createUser("Piyush" , "piyushkumar9337@gamil.com" , "9337")

console.log(user);
