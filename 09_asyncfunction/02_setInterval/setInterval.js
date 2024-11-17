let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");

let intervalId = startBtn.addEventListener('click' , ()=>{
    let interval = ()=>{
        console.log('Hello Master Piyush!');
    }
    let changeInterval = setInterval(interval, 2*1000);

    //stop Button;
    stopBtn.addEventListener('click' , ()=>{
        clearInterval(changeInterval);
    })

})

