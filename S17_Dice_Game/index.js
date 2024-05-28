var rand1 = Math.floor((Math.random() * 6) + 1);
var img1 = "./images/dice" + rand1 + ".png";
document.querySelector("img.img1").setAttribute("src", img1)

var rand2 = Math.floor((Math.random() * 6) + 1);
var img2 = "./images/dice" + rand2 + ".png";
document.querySelector("img.img2").setAttribute("src", img2);

var msg = "";
if (rand1 > rand2) {
    msg = "Player 1 Wins!!";
} else if (rand2 > rand1) {
    msg = "Player 2 Wins!!";
} else {
    msg = "Draw!!"
}

document.querySelector("h1").innerHTML = msg;