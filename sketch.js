
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper;

function preload()
{
	
}

function setup() {
	createCanvas(900, 400);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	ground = new ground(600,height,1200,20);

	 paper = createSprite (56, 46, 55, 55);
	 Matter.Bodies.circle(x,y,radius,[options],[maxSides]);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  drawSprites();
 
}



