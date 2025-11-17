let system;

function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(width / 2, 50));
}

function draw() {
  background(51);

  noCursor();

  rectMode(CENTER);
  fill(0);
  rect(mouseX, mouseY, 15, 5);

  let gravity = createVector(0, 0.1);
  system.applyForce(gravity);

  let wind = createVector(random(-0.1, 0.1), -0.05);
  system.applyForce(wind);

  system.setPosition(createVector(mouseX, mouseY));
  system.run();
}

function mouseReleased() {
  for (let i = 0; i < 10; i++) {
    system.addParticle();
  }
}
