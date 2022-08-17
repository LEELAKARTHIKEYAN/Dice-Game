var randomNumber1 =Math.ceil((Math.random()*6));
var randomDiceImage1 = "../Dicee Challenge/images/dice" + randomNumber1 +".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomDiceImage1);

var randomNumber2 = Math.ceil((Math.random()*6));
var randomDiceImage2 = "../Dicee Challenge/images/dice" + randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2)


if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 wins 💛";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins 💙";
}
else
document.querySelector("h1").innerHTML = "Draw 💜";