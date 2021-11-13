function pageReload(){
    location.reload();
}
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var img1 = document.querySelectorAll("img")[1];
img1.setAttribute("src",randomImageSource )



var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var img2 = document.querySelectorAll("img")[2];
img2.setAttribute("src",randomImageSource2 )


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Play 1 Wins";
}
else if ( randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Play 2 Wins";
}
else {
    document.querySelector("h1").textContent = "Draw!";
}
// var randomNo1 = (Math.random() * 6) + 1 ;
// randomNo1 = Math.round(randomNo1);
// console.log(randomNo1)
// if(randomNo1 === 1){

//     document.querySelector(".img1").getAttribute("src");
//     document.querySelector(".img1").setAttribute("src", "/images/dice1.png");
// }
// else if(randomNo1 === 2){
 
//     document.querySelector(".img1").getAttribute("src");
//     document.querySelector(".img1").setAttribute("src", "/images/dice2.png");
// }
// else if(randomNo1 === 3){
 
//     document.querySelector(".img1").getAttribute("src");
//     document.querySelector(".img1").setAttribute("src", "/images/dice3.png");
// }
// else if(randomNo1 === 4){
 
//     document.querySelector(".img1").getAttribute("src");
//     document.querySelector(".img1").setAttribute("src", "/images/dice4.png");
// }
// else if(randomNo1 === 5){
 
//     document.querySelector(".img1").getAttribute("src");
//     document.querySelector(".img1").setAttribute("src", "/images/dice5.png");
// }
// else if(randomNo1 === 6){
 
//     document.querySelector(".img1").getAttribute("src");
//     document.querySelector(".img1").setAttribute("src", "/images/dice6.png");
// }


// /********2nd dice code **********/
// var randomNo2 = (Math.random() * 6) + 1 ;
// randomNo2 = Math.round(randomNo2);
// console.log(randomNo2)
// if(randomNo2 === 1){

//     document.querySelector(".img2").getAttribute("src");
//     document.querySelector(".img2").setAttribute("src", "/images/dice1.png");
// }
// else if(randomNo2 === 2){
 
//     document.querySelector(".img2").getAttribute("src");
//     document.querySelector(".img2").setAttribute("src", "/images/dice2.png");
// }
// else if(randomNo2 === 3){
 
//     document.querySelector(".img2").getAttribute("src");
//     document.querySelector(".img2").setAttribute("src", "/images/dice3.png");
// }
// else if(randomNo2 === 4){
 
//     document.querySelector(".img2").getAttribute("src");
//     document.querySelector(".img2").setAttribute("src", "/images/dice4.png");
// }
// else if(randomNo2 === 5){
 
//     document.querySelector(".img2").getAttribute("src");
//     document.querySelector(".img2").setAttribute("src", "/images/dice5.png");
// }
// else if(randomNo2 === 6){
 
//     document.querySelector(".img2").getAttribute("src");
//     document.querySelector(".img2").setAttribute("src", "/images/dice6.png");
// }

// /*************Decision**************/
// if( randomNo1 === randomNo2){
//   document.querySelector("h1").textContent = "Draw!";
// }
// else if( randomNo1 > randomNo2){
//     document.querySelector("h1").textContent = "Player 1 Wins";
// }
// else {
//     document.querySelector("h1").textContent = "Player 2 Wins";
// }