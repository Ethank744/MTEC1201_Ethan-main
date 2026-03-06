let img;



function setup() {
  createCanvas(400, 400);
}

function preload(){
  img = loadImage('images/nike2.jpg');
}

function draw() {
//debugger;
  background(220);
  let imageH = 150
  let imageW= imageH * img.width/ img.height
  
  image(img, 50,50, imageW, imageH );
}
