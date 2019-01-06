let shape = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  shape.push(new Shape());

	for (var tri of shape) {
	  tri.render();
		tri.fall();
  }

  for (let i = shape.length - 1; i >= 0; i--) {
    if (shape[i].offScreen()) {
      shape.splice(i, 1);
    }
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}




class Shape {
  constructor() {
  	this.pos = createVector(random(width), random(height));
  	this.vel = createVector(0, 2);
    this.s = random(3, 10);
  }

  fall() {
		this.pos.add(this.vel);
  }

  render() {
    var x1 = width - this.pos.x - this.s;
    var y1 = height - this.pos.y + this.s;
    var x2 = width - this.pos.x + this.s;
    var y2 = height - this.pos.y + this.s;
    var x3 = width - this.pos.x;
    var y3 = height - this.pos.y - this.s;

    noStroke();
    fill(random(180, 255), 210, random(180, 220));
		triangle(x1, y1, x2, y2, x3, y3);
  }

  offScreen() {
    return (this.pos.y > height) || (this.pos.x > width);
  }
}
