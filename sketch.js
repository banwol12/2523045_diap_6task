let system;
let moneyCount = 0;

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


  //textAlign(RIGHT, TOP);
  textSize(16);
  fill(255);
  text("계좌 잔고: ", 550, 20);
  text(moneyCount + "원", 620, 20);
}

function mouseReleased() {
  for (let i = 0; i < 10; i++) {
    system.addParticle();
  }
  moneyCount += 100000;
}
