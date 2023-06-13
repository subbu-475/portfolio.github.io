var number=Math.random()*6;
number=Math.floor(number);
var number1=Math.random()*6;
number1=Math.floor(number1);
var run=document.querySelector(".img1").setAttribute("src",("images/dice"+(number+1)+".png"));
var run1=document.querySelector(".img2").setAttribute("src",("images/dice"+(number1+1)+".png"));
if (number>number1) {
    document.querySelector("h1").textContent="🏁Player 1 wins!";
}
else if (number===number1) {
    document.querySelector("h1").textContent="Draw!";
}
else {
    document.querySelector("h1").textContent="Player 2 wins!🏁";
}
