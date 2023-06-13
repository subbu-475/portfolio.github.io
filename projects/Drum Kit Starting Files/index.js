var number=document.querySelectorAll(".drum").length;
for (var i=0;i<number;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
      var btnHtml=this.innerHTML;
      makeSound(btnHtml);
      buttonAnimation(btnHtml);
      })
      
    };
/*var audio=new Audio("sounds/tom-1.mp3");
audio.play();*/
document.addEventListener("keypress",function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound (key) {
  switch (key) {
    case "w":
      var tom1=new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2=new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3=new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4=new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash=new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick=new Audio("sounds/snare.mp3");
      kick.play();
      break;
    case "l":
      var snare=new Audio("sounds/kick-bass.mp3");
      snare.play();
      break;
}
}

function buttonAnimation (currentbutton) {
      document.querySelector("."+currentbutton).classList.add("pressed");
      setTimeout (() =>{
        document.querySelector("."+currentbutton).classList.remove("pressed"); 
      },100);
}