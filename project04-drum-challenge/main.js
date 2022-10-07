let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        this.style.color = ('white');
        //var audio = new Audio('sounds/tom-1.mp3');
        //audio.play();
    });
}


