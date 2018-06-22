$(document).ready(function(){

/*Home Page */
var imgIndex = newFunction(); // Sets array to the first image
var i;
var x = document.getElementsByClassName("img-fade");

function fadeImg (){

	for (i=0;i<x.length; i++){  //Creates a loop for slideshow
		x[i].style.opacity = "0"; // Starts with the first image
	}
	imgIndex++;
	if (imgIndex===x.length){
		imgIndex = 0;
	}
	x[imgIndex].style.opacity = "1";

	setTimeout(fadeImg, 5000); // Set the timer in 5 seconds to fade in the image
}
fadeImg(); // Callsback the fadeImg function
console.log(imgIndex);

























}); //ends document

function newFunction() {
    var imgIndex = 0; // Sets array to the first image
    return imgIndex;
}
