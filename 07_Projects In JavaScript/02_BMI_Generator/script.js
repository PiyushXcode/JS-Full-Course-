let form  = document.querySelector("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector('#result');
    let Message = document.querySelector('#Msg');

    let bmi = (weight / ((height*height ) / 10000)).toFixed(2);
    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = `Please Enter Valid Heigjht ${height}`;
    }else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please Enter Valid Weight ${weight}`;
    }else {
        result.innerHTML = `<span>Your BMI is: ${bmi}</span>`
    }

    if(bmi < 18.5){
        Message.innerHTML = ` You Are Under Weight`;
    }else if(bmi <= 30.5){
        Message.innerHTML = ` You are in Normal Range `;
    }else{
        Message.innerHTML = ` You are Over Weight `
    }
})