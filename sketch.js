const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

var particles = [];
var plinkos = [];
var divisions = [];
var particle, wall1, wall2;
var score = 0;

var time, tries = 0;

function setup() {
    createCanvas(480, 800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground();
    for (var k = 80; k <= width - 80; k = k + 80) {
        divisions.push(new Divisions(k, height - 150, 300));
    }
    wall1 = new Divisions(0, height / 2, height * 1.5)
    wall2 = new Divisions(480, height / 2, height * 1.5)


    for (var j = 75; j <= width; j = j + 50) {
        plinkos.push(new Plinko(j, 75));
    }

    for (var j = 50; j <= width - 10; j = j + 50) {
        plinkos.push(new Plinko(j, 175));
    }

    for (var j = 75; j <= width; j = j + 50) {
        plinkos.push(new Plinko(j, 275));
    }

    for (var j = 50; j <= width - 10; j = j + 50) {
        plinkos.push(new Plinko(j, 375));
    }

    engine.timing.timeScale =
        time = createSlider(0.01, 3, 1.3, 0.01);
}

function mouseReleased() {
    if (tries < 5) {
        particle = particles.push(new Particle(mouseX, 10));
        tries += 10
    }

}

function draw() {
    background(0);
    Engine.update(engine);
    ground.display();
    /*if (frameCount % 45 === 0) {
        particles.push(new Particle(random(width / 2 - 50, width / 2 + 50), 10, 10))
    }*/

    //particle.display();
    push();
    textSize(35);
    fill("white");
    textAlign(RIGHT);
    text("Score = " + score, width - 10, 50);
    pop();

    for (var i = 0; i < particles.length; i++) {
        particles[i].display();
    }
    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();
    }
    for (var k = 0; k < divisions.length; k++) {
        divisions[k].display();
    }
    wall1.display();
    wall2.display();
    if (tries === 5) {
        textSize(80);
        fill("aqua");
        textAlign(CENTER);
        text("GAME OVER", 240, 400);
    }
    push();
    textSize(30);
    textAlign(CENTER);
    stroke("green")
    fill("green")
    strokeWeight(2)
    text('100', 40, 600)
    text('200', 120, 600)
    text('400', 200, 600)
    text('400', 280, 600)
    text('200', 360, 600)
    text('100', 440, 600)
    pop();
    engine.timing.timeScale = time.value();

}