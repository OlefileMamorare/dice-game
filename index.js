var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randPic = "./images/dice" + randomNumber1 + ".png";
var randPic2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randPic);
document.querySelector(".img2").setAttribute("src", randPic2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player One Wins! 🚩";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player Two Wins! 🚩";
}else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").textContent = "Draw 🤝";
}