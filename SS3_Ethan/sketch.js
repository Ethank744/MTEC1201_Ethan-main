let r;
let g;
let b;
let h = 150;
let w = 150;
function setup() 
{
	createCanvas(500, 500, WEBGL);
  r = 255;
  b = 255;
  g = 255;
}

function draw(){

background(220);

fill(r,g,b);
if (mouseIsPressed){rotateY(frameCount * 0.01);}
  else if(keyIsPressed){
    h += 1;
    w += 2;
  }

  else if(h > 200 || w > 200){ 
    h = 150;
    w = 150;

  }
rect(mouseX - width/2,mouseY - height/2,h,w);
}

function mousePressed() {
  r = random(255);
  b = random(255);
  g = random(255);

}