
var img1= document.getElementsByClassName("img1")[0]; //getElementsByClassName give me html colecction, i need to catch te first component
var img2= document.getElementsByClassName("img2")[0]; //getElementsByClassName give me html colecction, i need to catch te first component
var h1 = document.getElementsByTagName("h1")[0];
var container=document.getElementsByClassName("container")[0];



function play(){
	var randomNumber1 = Math.floor(Math.random()*6)+1;
	var randomNumber2 = Math.floor(Math.random()*6)+1;
	img1.src="./images/dice"+randomNumber1+".png";
	img2.src="./images/dice"+randomNumber2+".png";	

	if(randomNumber1 > randomNumber2){
		h1.innerHTML="Player 1 Wins"
	} else if(randomNumber1 < randomNumber2){
		h1.innerHTML="Player 2 Wins"
	} else {
		h1.innerHTML="Draw!!"
	}
}


container.addEventListener("click", play);

// function changeImage1(){
// 	var randomNumber1 = Math.floor(Math.random()*6)+1;
// 	img1.src="./images/dice"+randomNumber1+".png";
// }

// function changeImage2(){
// 	var randomNumber2 = Math.floor(Math.random()*6)+1;
// 	img2.src="./images/dice"+randomNumber2+".png";
// }

// img1.addEventListener("click", changeImage1);
// img2.addEventListener("click", changeImage2);