let x = [];
let y = [];
let speed = [];

function setup() {
  createCanvas(500, 500);

  for (let i = 0; i < 5; i++){
    x[i] = random(width);
    y[i] = random(height);
    speed[i] = random(2, 5);
  }
}

function draw() {
  background(30)

  for (let i = 0; i < x.length; i++){

    y[i] += speed[i];

    if (y[i] > height || y[i] < 0) {
      speed[i] *= -1;
    }

    circle(x[i], y[i], 30):
  }