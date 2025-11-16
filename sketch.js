let system;

function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(width / 2, 50));
}

function draw() {
  background(51);

  let turbulence = createVector(random(-0.3, 0.3), random(-0.3, 0.3));
  
  system.applyForce(turbulence);
  system.addParticle();
  system.run();
}
