var randomNumber1 = Math.floor(Math.random()*6)+ 1;
var randomDiceImage =  randomNumber1 + ".png";
var randomImageSource = "img/dice" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6) +  1;
var randomDiceImage2 = randomNumber2 + ".png";
var randomImageSource2 = "img/dice" + randomDiceImage2 ; 
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2); 

if(randomNumber1> randomNumber2){
    document.querySelector(".winner").innerHTML = "Player 1 is winner "
} else if (randomNumber2 > randomNumber1){
    document.querySelector(".winner").innerHTML = "Player 2 is winner "
} else {
    document.querySelector(".winner").innerHTML = "DRAW";
}
document.getElementById("refreshbutton").addEventListener('click',function (){

location.reload();
    
})