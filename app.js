var player1 = prompt("Enter Name of Player 1");
var player2 = prompt("Enter Name of Player 2");
document.getElementById("pl1").innerHTML=player1;
document.getElementById("pl2").innerHTML=player2;

var randomNumber1 = Math.floor(Math.random()*6+1);
var imagesource1 = "images/" + randomNumber1 + ".png";
var images = document.getElementById("img1");
images.setAttribute("src",imagesource1);


var randomNumber2 = Math.floor(Math.random()*6+1);
var imagesource2 = "images/" + randomNumber2 + ".png";
var images2 = document.getElementById("img2");
images2.setAttribute("src",imagesource2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩 "+player1+ " Wins";
}
else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}
else{
    document.querySelector("h1").innerHTML=player2+" Wins🚩";
}