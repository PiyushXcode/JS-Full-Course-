let sayMyName = () => {
    console.log('Hello, Piyush');
    let cngh1 = document.querySelector("h1");
    cngh1.innerText = "Chai Aur Code";
}
let changeExecution = setTimeout(sayMyName, 1000 * 2)

document.querySelector('#stopButton').addEventListener('click', () => {
    clearTimeout(changeExecution);
    document.write("Button Clicked");
})


let Interval = setInterval(()=>{
    console.log('Hello, Piyush');
},2*1000)