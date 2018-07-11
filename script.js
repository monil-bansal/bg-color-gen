var _ = require('lodash');
// console.log("_");
var array=[1,2,3,4,5,6];
console.log('answe:' , _.without(array,3));
var body = document.getElementById('generator');
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var css = document.querySelector("#css");
var button=document.getElementById('button');

console.log(button);
function colorChanger(){
	body.style.background = "linear-gradient(to right,"+ color1.value+","
							+ color2.value+")";

	css.textContent = body.style.background +";";
	button.style.background = "linear-gradient(to left,"+ color1.value+","
							+ color2.value+")";
}

function randomColor(){
	var letters="0123456789ABCDEF";
	var colorA= '#' ;
	var colorB= '#'  ;
	for(var i=0;i<6;i++){
		colorA+= letters[Math.floor(Math.random()*16)];
		colorB+= letters[Math.floor(Math.random()*16)];
	}

	color1.value=colorA;
	color2.value=colorB;
	body.style.background = "linear-gradient(to right,"+ color1.value+","
							+ color2.value+")";

	css.textContent = body.style.background +";";
	button.style.background = "linear-gradient(to left,"+ color1.value+","
							+ color2.value+")";


}

color1.addEventListener("input", colorChanger);

color2.addEventListener("input",colorChanger);

button.addEventListener("click", randomColor);

