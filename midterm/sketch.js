// Ethan King
//Midterm Sketch
//Use numbers 1,2,3 to switch between scenes.3

let scene = 1;
let expand = 0;
let img;
let imageH = 150;
let imageW = 150;

// Video player variables
let playing = false;
let video;
let button;

function preload() {
  img = loadImage('images/nike2.jpg');
  imageW = imageH * img.width / img.height;
}

function setup() {
  createCanvas(500, 500, WEBGL);

  // Video setup
  video = createVideo(['videos/commerical.mp4']);
  button = createButton('play');
  button.mousePressed(toggleVid);
  video.hide();
  button.hide();
}

function toggleVid() {
  if (playing) {
    video.pause();
    button.html('play');
  } else {
    video.loop();
    button.html('pause');
  }
  playing = !playing;
}
function draw() {
  background(255);
  
  if (scene != 2) {
    background(0);
    fill(255, 0, 0); // Red color
  textSize(32);
  textAlign(CENTER);
  text('never give up', 0, -200);
}
  
  
  if (scene == 1) {
    doScene1();
  } else if (scene == 2) {
    doScene2();
  } else if (scene == 3) {
    doScene3();
  }
  
  print(scene);
}

function keyPressed() {
  if (key == '1') {
    scene = 1;
  } else if (key == '2') {
    scene = 2;
  } else if (key == '3') {
    scene = 3;
  }
}

function doScene1() {
  select('canvas').show();
  video.hide();
  button.hide();
  rotateY(frameCount * 0.01);
  image(img, -imageW/2, -imageH/2, imageW, imageH);
}

function doScene2() {
  select('canvas').show();
  video.hide();
  button.hide();
}

function doScene3() {
  select('canvas').hide();
  video.show();
  button.show();
}