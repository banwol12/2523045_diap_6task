class Particle {
  constructor(position) {
    this.acceleration = createVector(0, 0.05);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = position.copy();
    this.lifespan = 255;
    this.c = color(0, 180, 20);
  }


  run() {
    this.update();
    this.display();
  }

  // Method to update position
  update(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
    this.acceleration.mult(0);
  }

  // Method to display
  display() {
    stroke(this.c.levels[0], this.c.levels[1], this.c.levels[2], this.lifespan);
    strokeWeight(2);
    fill(this.c.levels[0], this.c.levels[1], this.c.levels[2], this.lifespan);
    rect(this.position.x, this.position.y, 15, 5);
  }

  // Is the particle still useful?
  isDead() {
    return this.lifespan < 0;
  }
}