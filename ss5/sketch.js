let x = [];
let y = [];
let trailx = [];
let traily = [];


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);

  trailx.push(mouseX);
  traily.push(mouseY);

  if (trailx.length > 50) 
    { 
     trailx.shift();
     traily.shift();
    }

for (let i = 0; i < trailx.length; i++){
  ellipse(trailx[i], traily[i], 10, 10);
}
}