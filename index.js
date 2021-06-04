var randomNo1 = Math.floor(Math.random()*6)+1;

var randomDiceImg1 = "dice"+randomNo1+".png";

var randomDiceSource1 = "images/"+randomDiceImg1;

var img1 = document.querySelector(".img1");
img1.setAttribute("src", randomDiceSource1);

var randomNo2 = Math.floor(Math.random()*6)+1;

var randomDiceImg2 = "dice"+randomNo2+".png";

var randomDiceSource2 = "images/"+randomDiceImg2;

var img2 = document.querySelector(".img2");
img2.setAttribute("src", randomDiceSource2);

if(randomNo1<randomNo2)
  document.querySelector("h1").innerHTML = "Player 2 Won 🚩";
else if(randomNo1>randomNo2)
  document.querySelector("h1").innerHTML = "🚩 Player 1 Won ";
else if(randomNo1===randomNo2)
  document.querySelector("h1").innerHTML = "Draw!!";
