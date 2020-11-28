
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


	dustbin1 = new DustbinClass(600, 670, 200, 20)
	dustbin2 = new DustbinClass(710, 605, 20, 150)
	dustbin3 = new DustbinClass(495, 605, 20, 150)

  paper1 = new paper(100, 100, 20)
  ground1 = new Ground(400, 690, 800, 20)
console.log(paper1)
}


function draw() {
	
	background(0);
	Engine.update(engine)
  rectMode(CENTER);
  
  paper1.display()
  ground1.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()

  drawSprites();
 
}
function keyPressed(){
	if (keyDown("up")){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:50, y:-50} )
	}
}


