let userInput = document.querySelector("#GuessInput");
let Submit = document.querySelector("#SubmitGuess");
let previous = document.querySelector("#Guesses")
let Remaning = document.querySelector("#LeftAttempts");
let lowOrhi = document.querySelector("#highOrlow")
let startOver = document.querySelector(".resultParas");

let p = document.createElement("p");

let Random = Math.ceil(Math.random() * 100);
console.log(Random);


let PrevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
   Submit.addEventListener('click' , (e) => {
    e.preventDefault();
    let userGuess = parseInt(userInput.value);
    console.log(userGuess);
    validateGuess(userGuess);
   } )

}

function validateGuess(userGuess){
    //Validate Guess
    if(userGuess < 0){
        alert("Please Enter a number Greater than 0");
    }else if(userGuess > 100){
        alert("Please Enter a number Less than 100");
    }else if(isNaN(userGuess)){
        alert("Please Enter a Valid Number!!");
    }else {
        PrevGuess.push(userGuess);   
        if(numGuess === 11) {
            displayGuess(userGuess);
            displayMessage(`Your Game is Over !! you have used all your Attempts`)
            endGame();
        }else {
            displayGuess(userGuess);
            CheckGuess(userGuess);
        }
    }
}

function CheckGuess (userGuess){
    //Check guesses
    if(userGuess === Random){
        displayMessage(`You Won !! The number was ${Random}`);
        endGame();
    }else if(userGuess < Random){
        displayMessage(`Try Again !! You Guess Smaller Number`)
    }else{
        displayMessage(`Try Again !! You Guess Larger Number`);
    }

}

function displayGuess(userGuess){
    //clear the previous Inserted Value
    userInput.value = '';
    previous.innerHTML += `${userGuess}   `; 
    numGuess ++;
    Remaning.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    //display Messages
    lowOrhi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    //End Game
    userInput.value = '';
    userInput.setAttribute('disabled' , '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    //Start a new game
    let newGamebutton = document.querySelector("#newGame");
    newGamebutton.addEventListener('click', function(e){
    let Random = Math.ceil(Math.random() * 100);
    PrevGuess = [];
    numGuess = 1;
    previous.innerHTML ='';
    Remaning.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disbled');
    startOver.removeChild(p);

    playGame = true;
    })
}

