let system;

function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(width / 2, 50));
}

function draw() {
  background(51);
  system.setPosition(createVector(mouseX, mouseY));
  system.run();
}

function mouseReleased() {
  system.addParticle();
}
