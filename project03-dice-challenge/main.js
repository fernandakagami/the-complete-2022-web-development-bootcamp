let randomNumberOne = Math.floor(Math.random() * 6) + 1;
let randomNumberTwo = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").src = `images/dice${randomNumberOne}.png`;

document.querySelector(".img2").src = `images/dice${randomNumberTwo}.png`;

let heading = document.querySelector("h1");

if (randomNumberOne > randomNumberTwo) {
    document.querySelector("h1").innerHTML = "Play 1 Wins!";
} else if (randomNumberTwo > randomNumberOne) {
    document.querySelector("h1").innerHTML = "Play 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}