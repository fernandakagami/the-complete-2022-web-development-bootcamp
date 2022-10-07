let randomNumberOne = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").src = `file:///D:/the-complete-2022-web-development-bootcamp/projetc03-dicee-challenge/images/dice${randomNumberOne}.png`;

let randomNumberTwo = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img2").src = `file:///D:/the-complete-2022-web-development-bootcamp/projetc03-dicee-challenge/images/dice${randomNumberTwo}.png`;

if (randomNumberOne > randomNumberTwo) {
    document.querySelector("h1") = "Play 1 wins!";
} else if (randomNumberTwo > randomNumberOne) {
    document.querySelector("h1") = "Play 2 wins!";
} else {
    document.querySelector("h1") = "Draw!";
}
