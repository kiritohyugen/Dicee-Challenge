var randomNumber1 = Math.floor(Math.random()*6)+1;
var newImage1 = './images/dice'+randomNumber1+'.png';
document.firstElementChild.lastElementChild.querySelector(".img1").setAttribute("src",newImage1) ;



var randomNumber2 = Math.floor(Math.random()*6)+1;
var newImage2 = './images/dice'+randomNumber2+'.png';
document.firstElementChild.lastElementChild.querySelector(".img2").setAttribute("src",newImage2);


if(randomNumber1 === randomNumber2){
    document.firstElementChild.lastElementChild.querySelector("h1").innerText = 'Draw !';
}else if (randomNumber1 <= randomNumber2){
    document.firstElementChild.lastElementChild.querySelector("h1").innerText = 'Player 2 Wins !';

}else{
    document.firstElementChild.lastElementChild.querySelector("h1").innerText = 'Player 1 Wins !';

}