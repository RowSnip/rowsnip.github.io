var coin =
document.getElementsByClassName("maDiv");
coin.addEventListener("click", function()
{
    var sound = new Audio("assets\sound\pay.mp3");
    sound.play();
});
