// Reactive Boss Battle with PHASE CHANGES
// Boss transforms as HP gets lower!

let bossHP = 100;
let currentKey = "";
let timer = 120;
let score = 0;

let gameOver = false;
let win = false;

let keys = ["A", "S", "D", "F", "J", "K", "L"];

// Boss phases
let bossState = 1;

function setup() {
createCanvas(900, 550);
textAlign(CENTER, CENTER);
textFont("monospace");

pickNewKey();
}

function draw() {
background(15);

updateBossState();

if (!gameOver) {
timer--;

if (timer <= 0) {
bossHP += 5;

timer = max(30, 120 - score * 2);

if (bossHP >= 120) {
gameOver = true;
}

pickNewKey();
}
}

drawArena();
drawBoss();
drawUI();

if (win) {
winScreen();
}

if (gameOver && !win) {
loseScreen();
}
}

function updateBossState() {
if (bossHP > 70) {
bossState = 1;
} else if (bossHP > 35) {
bossState = 2;
} else {
bossState = 3;
}
}

function drawArena() {
stroke(40);
for (let x = 0; x < width; x += 40) {
line(x, 0, x, height);
}

for (let y = 0; y < height; y += 40) {
line(0, y, width, y);
}
}

function drawBoss() {
push();

translate(width / 2, height / 2 - 30);

// Shake intensity grows by phase
let shake = bossState * 4;

translate(random(-shake, shake), random(-shake, shake));

noStroke();

// ===== PHASE 1 =====
if (bossState === 1) {
fill(180, 40, 40);
ellipse(0, 0, 220);

// eyes
fill(255);
ellipse(-40, -20, 40);
ellipse(40, -20, 40);

fill(0);
ellipse(-40, -20, 15);
ellipse(40, -20, 15);

// mouth
stroke(0);
strokeWeight(5);
noFill();
arc(0, 40, 80, 40, 0, PI);

fill(255);
textSize(24);
text("PHASE 1", 0, -150);
}

// ===== PHASE 2 =====
else if (bossState === 2) {
fill(120, 0, 180);
ellipse(0, 0, 260);

// spinning eye effect
fill(255, 0, 255);
ellipse(-50, -20, 50);
ellipse(50, -20, 50);

fill(0);
ellipse(
-50 + sin(frameCount * 0.2) * 10,
-20,
18
);

ellipse(
50 + cos(frameCount * 0.2) * 10,
-20,
18
);

// angry mouth
stroke(255);
strokeWeight(6);
line(-50, 60, 50, 60);

// aura
noFill();
stroke(180, 0, 255);
ellipse(0, 0, 300 + sin(frameCount * 0.2) * 20);

fill(255);
noStroke();
textSize(24);
text("PHASE 2", 0, -170);
}

// ===== FINAL PHASE =====
else if (bossState === 3) {

// flashing colors
fill(
random(255),
random(80),
random(80)
);

ellipse(0, 0, 300);

// giant eyes
fill(255);
ellipse(-60, -30, 70);
ellipse(60, -30, 70);

fill(255, 0, 0);

ellipse(
-60 + random(-10, 10),
-30 + random(-10, 10),
25
);

ellipse(
60 + random(-10, 10),
-30 + random(-10, 10),
25
);

// giant mouth
stroke(255);
strokeWeight(8);

for (let i = -60; i < 60; i += 15) {
line(i, 50, i + 10, 80);
}

// energy rings
noFill();

stroke(255, 0, 0);

ellipse(
0,
0,
340 + sin(frameCount * 0.2) * 30
);

ellipse(
0,
0,
390 + cos(frameCount * 0.15) * 30
);

fill(255, 50, 50);
noStroke();
textSize(30);
text("FINAL PHASE", 0, -190);
}

pop();
}

function drawUI() {

// HP text
fill(255);
textSize(32);
text("BOSS HP: " + bossHP, width / 2, 40);

// HP Bar background
fill(60);
rect(200, 65, 500, 30);

// HP Bar color changes by phase
if (bossState === 1) {
fill(255, 0, 0);
} else if (bossState === 2) {
fill(180, 0, 255);
} else {
fill(255, 80, 0);
}

rect(200, 65, bossHP * 5, 30);

// Prompt
fill(255);
textSize(28);
text("PRESS THIS KEY", width / 2, 430);

fill(0, 255, 255);
textSize(80);
text(currentKey, width / 2, 500);

// Timer bar
fill(70);
rect(200, 520, 500, 12);

fill(255, 255, 0);
rect(
200,
520,
map(timer, 0, 120, 0, 500),
12
);

fill(255);
textSize(20);
text("Score: " + score, 90, 40);
}

function keyPressed() {

if (gameOver || win) return;

if (key.toUpperCase() === currentKey) {

// More damage in later phases
if (bossState === 1) {
bossHP -= 5;
} else if (bossState === 2) {
bossHP -= 4;
} else {
bossHP -= 3;
}

score++;

// Faster reactions needed later
timer = max(20, 120 - score * 2);

pickNewKey();

if (bossHP <= 0) {
bossHP = 0;
win = true;
gameOver = true;
}

} else {

// Wrong key punishment
bossHP += 2;
}
}

function pickNewKey() {
currentKey = random(keys);
}

function winScreen() {
background(0, 150, 80);

fill(255);
textSize(60);
text("BOSS DEFEATED", width / 2, height / 2);

textSize(28);
text(
"Final Score: " + score,
width / 2,
height / 2 + 60
);
}

function loseScreen() {
background(120, 0, 0);

fill(255);
textSize(60);
text("YOU LOST", width / 2, height / 2);

textSize(28);
text(
"The boss overwhelmed you...",
width / 2,
height / 2 + 60
);
}
