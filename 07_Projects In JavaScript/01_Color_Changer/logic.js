// let head = document.querySelector("h1");
// let foot = document.querySelector("h3");
// let head1 = document.querySelector("h1");
// let foot1 = document.querySelector("h3");
// let Grey= document.querySelector("#grey");
// let Blue = document.querySelector("#blue");
// let Green = document.querySelector("#green");
// let Yellow = document.querySelector("#yellow");
// let Purple = document.querySelector("#purple");


// function grey(){
//     Grey.style.border = "2px solid white";
//     foot.style.color = "white";
//     head.style.color = "white";
//     document.body.style.backgroundColor = "#212121";
// }
// function blue(){
//     Blue.style.border = "2px solid white";
//     foot.style.color = "white";
//     head.style.color = "white";
//     document.body.style.backgroundColor = "#008";
// }
// function green(){
//     Green.style.border = "2px solid white";
//     foot1.style.color = "Black";
//     head1.style.color = "Black";
//     document.body.style.backgroundColor = "#008000";
// }
// function yellow(){
//    Yellow.style.border = "2px solid white";
//     foot1.style.color = "Black";
//     head1.style.color = "Black";
//     document.body.style.backgroundColor = "#fff000";
// }
// function purple(){
//     Purple.style.border = "2px solid white";
//     foot1.style.color = "Black";
//     head1.style.color = "Black";
//     document.body.style.backgroundColor = "#bd67ff";
// }



let buttons = document.querySelectorAll(".button");
let body = document.querySelector("body");

buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', (e) =>{
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
        }
    })
});