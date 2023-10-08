let font,
  fontsize = 150;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('SourceSans3-Regular.ttf');
}

function setup() {
  createCanvas(700, 600);
  background(255);
	// Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
	randomSeed(381);
  for (let i = 50; i < windowWidth + 100; i += 150) {
    for (let j = 50; j < windowHeight + 100; j += 100) {
      noStroke();
      rectMode(CENTER);
      fill(random(60, 255), random(20, 40), random(0, 20));
      rect(i, j, random(1, 50), 100);
    }
  }
}

function draw() {
  // Align the text to the right
  // and run drawWords() in the left third of the canvas
  textAlign(LEFT);
  drawWords(width * 0.1);
}

function drawWords(x) {
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position
  fill(0);
  text('the', x, 100);
	text('inception', x, 220);
}
// https://p5js.org/reference/#/p5/randomSeed
// https://p5js.org/examples/typography-words.html
// originally by Lee Doughty (https://openprocessing.org/sketch/1922728)
