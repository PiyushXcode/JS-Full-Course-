let randomColorGenerator = ()=>{
    let hexRange = "0123456789ABCDEF";
    let hexColor = "#";

    for(let i = 0 ; i < 6 ; i++){
        hexColor += hexRange[Math.floor(Math.random()*16)];
    }
    return hexColor;
}

let Interval_Id ;

let startChange = ()=>{
    if(Interval_Id == null){
        Interval_Id = setInterval(changeBg , 1000*1);
    }
}

let changeBg = ()=>{
    document.body.style.backgroundColor = randomColorGenerator();
}

document.querySelector("#start").addEventListener('click' , startChange);

let stopChange = ()=>{
    clearInterval(Interval_Id);
    Interval_Id = null;
}

document.querySelector("#stop").addEventListener('click' , stopChange);