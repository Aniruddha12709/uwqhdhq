const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

//Create multiple bobs, mulitple ropes varibale here
var bob;
var bob2;
var bob3;
var bob4;
var bob5;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true	
	}
	
	var bob_options={
		isStatic:true
	}
	var bob2_options={
		isStatic:true
	}
	var bob3_options={
		isStatic:true
	}
	var bob4_options={
		isStatic:true
	}
	var bob5_options={
		isStatic:true
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob = Bodies.circle(200,50,10,bob_options);
	World.add(world,bob);

	bob2 = Bodies.circle(210,50,10,bob2_options);
	World.add(world,bob2);

	bob3 = Bodies.circle(220,50,10,bob3_options);
	World.add(world,bob3);

	bob4= Bodies.circle(230,50,10,bob4_options);
	World.add(world,bob4);

	bob5 = Bodies.circle(240,50,10,bob5_options);
	World.add(world,bob5);

	rope1=new rope(bob1,roof,-80, 0);
	rope2=new rope(bob2,roof,-70, 0);
	rope3=new rope(bob3,roof,-60, 0);
	rope4=new rope(bob4,roof,-50, 0);
	rope5=new rope(bob5,roof,-40, 0);


	
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  display()
  {
	  var pointA=this.rope.bodyA.position;
	  var pointB=this.rope.bodyB.position;

	  strokeWeight(2);
	  //write line( ) code below to show line  between roof and bob
       

  }

  //create ellipse shape for multiple bobs here
  ellipse(bob.position.x,ball.position.y,10);
  ellipse(bob2.position.x,ball.position.y,11);
  ellipse(bob3.position.x,ball.position.y,12);
  ellipse(bob4.position.x,ball.position.y,13);
  ellipse(bob5.position.x,ball.position.y,14);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.body.applyForce(bob1,{x:0,y:0},{x:0.05,y:0});
	}
}
