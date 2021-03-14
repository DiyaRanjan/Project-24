
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer, stone1, rubber1, rubber2, rubber3, rubber4, rubber5, plane;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(300,400,100,50);
	stone1 = new Stone(500,500,30,30);
	rubber1 = new Rubber(200, 50, 50, 50);
	rubber2 = new Rubber(250, 50, 5, 5);
	rubber3 = new Rubber(257, 50, 5, 5);
	rubber4 = new Rubber(264, 50, 5, 5);
	rubber5 = new Rubber(271, 50, 5, 5);
	plane = new Plane(800, 680, 1600, 40)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display();

  stone1.display();

  rubber1.display();

  rubber2.display();

  rubber3.display();

  rubber4.display();

  rubber5.display();
  plane.display();

}



