var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var block1,block2,block3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}



function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	block1=createSprite(300,610,20,100);
	block1.shapeColor="red";

	block2=createSprite(400,650,200,20);
	block2.shapeColor="red";

	block3=createSprite(500,610,20,100);
	block3.shapeColor="red";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8,isStatic:true});
	World.add(world, packageBody);
	
	
     
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:false});
		World.add(world, packageBody);
		//packageSprite.y= packageBody.position.y+450;
	  }
   }



function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x=packageBody.position.x;
  packageSprite.y=packageBody.position.y;
  
  place();
  keyPressed();
  drawSprites();

 
}

function place(){
	if(packageSprite.isTouching(block2)){
		packageSprite.y= packageBody.position.y-25 ;
	  }
	
	  if(packageSprite.isTouching(block1)&&packageSprite.isTouching(block3)){
		  packageSprite.x=packageBody.position.x-50;	  }
   }
   





