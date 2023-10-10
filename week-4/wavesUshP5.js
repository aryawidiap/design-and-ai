//number of particles for each types (3000)
let  num = 3000;
// three types of particles a, b and c
var particles_a = [];
var particles_b = [];
var particles_c = [];
var fade = 2000; // the length of the particle tail
var radius = 3; // radius of the particles

//scale of curviness of the noise (300)
let noiseScale = 500;

//how often the direction of the noise change (1.2)
let noiseStrength = 30.0;

function setup() {
  createCanvas(1920, 1080);
  noStroke();
  for (let i=0; i<num; i++) {
    let loc_a = createVector(random(width*1.2), random(height), 2);
    let angle_a = random(TWO_PI);
    let dir_a = createVector(cos(angle_a), sin(angle_a));
		let loc_b = createVector(random(width*1.2), random(height), 2);
    let angle_b = random(TWO_PI);
    let dir_b = createVector(cos(angle_b), sin(angle_b));
		let loc_c = createVector(random(width*1.2), random(height), 2);
    let angle_c = random(TWO_PI);
    let dir_c = createVector(cos(angle_c), sin(angle_c));

    //particles[i]= new Particle(loc, dir, speed); slower particles will looks shorter 
		particles_a[i] = new Particle(loc_a, dir_a, 0.5);
		particles_b[i] = new Particle(loc_b, dir_b, 0.5);
		particles_c[i] = new Particle(loc_c, dir_c, 0.75);
		
  }
}

function draw() {
	//smooth();
  //background(0); // comment the background to see the particle tails uncomment to hide the tails
  fill(0, 2); // put a hight value for hiding the tails 
  noStroke();
  rect(0, 0, width, height);
    
  for (let i=0; i<num; i++) {
		
		fill(255,0,255, fade); //white
		particles_a[i].move();
		particles_a[i].update(radius);
		particles_a[i].checkEdges();

		fill(0, 255, 255, fade); //turqouise
		particles_b[i].move();
		particles_b[i].update(radius);
		particles_b[i].checkEdges();

		fill(102, 153, 255, fade); // blue
		particles_c[i].move();
		particles_c[i].update(radius);
		particles_c[i].checkEdges();
  }
}

let Particle = function(loc_, dir_, speed_) {
  this.loc = loc_;
	this.dir = dir_;
	this.speed = speed_;
	this.d = 1;
};

Particle.prototype.run = function() {
	  this.move();
    this.checkEdges();
    this.update();
};

// Method to move position
Particle.prototype.move = function(){
	  this.angle=noise(this.loc.x/noiseScale, this.loc.y/noiseScale, frameCount/noiseScale)*TWO_PI*noiseStrength;
    this.dir.x = cos(this.angle)+sin(this.angle)-sin(this.angle);
    this.dir.y = sin(this.angle)-cos(this.angle)*sin(this.angle);
    this.vel = this.dir.copy();
    this.vel.mult(this.speed*this.d);
    this.loc.add(this.vel);
};

// Method to chech edges 
Particle.prototype.checkEdges = function(){
 if (this.loc.x < 0 || this.loc.x > width || this.loc.y < 0 || this.loc.y > height) {    
      this.loc.x = random(width*1.2);
      this.loc.y = random(height);
    }
};


// Method to update position
Particle.prototype.update = function(r){
    ellipse(this.loc.x, this.loc.y, r);
};

// original: https://openprocessing.org/sketch/1921375
