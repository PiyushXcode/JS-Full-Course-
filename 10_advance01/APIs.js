let requestURL = 'https://api.github.com/users/PiyushXcode';

let card = document.createElement("div");
card.setAttribute("id", "myDiv");
document.body.appendChild(card);

 
let xhr = new XMLHttpRequest();
xhr.open('GET', requestURL)

xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        let data = JSON.parse(this.responseText)
        console.log(data);
        console.log(typeof data);
        console.log(data.name);
        card.innerHTML = `The Followers are: ${data.followers}`;
    }
}
xhr.send();
