
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	Engine.run(engine);
	ball = new Paper(100, 500, 30, 10);
	b1 = new Dustbin(490, 640, 20, 100, PI/2);
	b1.shapeColor=color(255, 0, 0);

	b2 = new Dustbin(600, 680, 200, 20, 0);
	b2.shapeColor=color(255, 0, 0);

	b3 = new Dustbin(710, 640, 20, 100, PI/2);
	b3.shapeColor=color(255, 0, 0);
	ground = new Ground(400,height,800,20)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
 b1.display();
 b2.display();
 b3.display();
 ground.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
		
	}
}


