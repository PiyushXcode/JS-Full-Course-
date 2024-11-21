// let newPromise = new Promise((resolve, reject)=>{
//     //Do Async Function
//     //DB calls, Cryptography, network
//     setTimeout(()=>{
//     console.log('Async is Complete');
//     resolve();  
//     },1000*2)
// })

// newPromise.then(function(){
//     console.log('Promise is Resolved');
// })

// new Promise( (resolve,reject)=>{
//     setTimeout(() => {
//         console.log('Async is Completed');
//         resolve()
//     }, 1000*2);
// } ).then( ()=>{
//     console.log('Async is Done');
// } )



//  thridPromise = new Promise( (resolve,reject)=>{
//     setTimeout( ()=>{
//         console.log('Some user Data');

//         resolve( {username:"Piyush", email:"piyushkumar9337@gmail.com"})
//     },1000*2)
//  } ).then((user)=>{
//     console.log(user);
//  })



forthPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "Piyush", Password: "1234" })
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000 * 2);
})

/*This also perfrom the same task; */
// .then((user) => {
//     console.log(user);
//     return user.username;
// })
// .then((username) => {
//     console.log(username);
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(() => {
//     console.log('The Promise is either resolved or rejected');
// })


/*This also perfrom the same task; */

// async function consumefourthPromise() {
//     try {
//         const respone = await forthPromise;
//         console.log(respone);
//     } catch (error) {
//         console.log(error);

//     }
// }

// consumefourthPromise()




// async function getAllUsers() {
//     try {
//         let response = await fetch("https://randomuser.me/api/");
        
//         let data =await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E: ', error);
//     }
// }

// getAllUsers()



fetch('https://api.github.com/users/PiyushXcode')
.then((respone) => {
    return respone.json()                   
})
.then( (data) => {
    console.log(data);
} )
.catch((error) => console.log(error));