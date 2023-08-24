var randomNo1 = Math.random();
var finalNo1 = Math.floor(randomNo1 *6)+1;
var randomNo2 = Math.random();
var finalNo2 = Math.floor(randomNo2 *6)+1;


var changeVal1 = document.querySelector(".img1").setAttribute("src","./images/dice"+finalNo1+".png");
var changeVal2 = document.querySelector(".img2").setAttribute("src","./images/dice"+finalNo2+".png");
 if (finalNo1<finalNo2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
 }
 else if (finalNo1>finalNo2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
 }
 else{
    document.querySelector("h1").innerHTML = "Draw!";
 }