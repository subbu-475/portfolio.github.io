document.querySelector("#btn1").addEventListener("click",calculate);
function calculate () {
setInterval (() => {
var getInput=new Date(document.querySelector("#get").value);
var date=new Date();
var getMs=date.getTime()-getInput.getTime();

var ageInS=getMs/1000;
var ageInM=ageInS/60;
var ageInH=ageInM/60;
var ageInD=ageInH/24;
var ageInMon=ageInD/30.4375;
var ageInY=ageInMon/12;

document.querySelector("#year").innerHTML=Math.floor(ageInY);
document.querySelector("#months").innerHTML=Math.floor(ageInMon%12);
document.querySelector("#days").innerHTML=Math.floor(ageInD%30.4167);
document.querySelector("#hours").innerHTML=Math.floor(ageInH%24);
document.querySelector("#mins").innerHTML=Math.floor(ageInM%60);
document.querySelector("#secs").innerHTML=Math.floor(ageInS%60);
},1000);
}

function reset () {
    window.location.reload();
}