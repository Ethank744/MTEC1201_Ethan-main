//Ethan K
function setup() 
{
	createCanvas(500, 500, WEBGL);
}

function draw(){

background(220);

fill(-120,-70,90);

rotateY(frameCount * 0.01);

rect(mouseX - width/2,mouseY - height/2,55,55);
}
