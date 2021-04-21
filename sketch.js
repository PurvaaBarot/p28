
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,treeImg,tree;
var boy,boyImg;
var mango1,mango2,mango3,mango4,mango5,mango6;
var stones

function preload()
{
	treeImg=loadImage("tree.png");
	boyImg=loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 700);

  slingShot = new Sling(this.stone1,{x:100,y:200});

	engine = Engine.create();
	world = engine.world;

    stone1 = new Stone(100,500,100);
	mango1 = new Mango(600,290,50);
	mango2 = new Mango(855,323,50);
	mango3 = new Mango(670,260,50);
	mango4 = new Mango(730,200,50);
	mango5 = new Mango(710,320,50);
	mango6 = new Mango(780,250,50);
  ground1 = new Ground(600,670)
	attach = new Throw(stone1.body,{x:100,y:465});

	tree = createSprite(775,368);
	tree.addImage(treeImg);
	tree.scale=0.42;

	boy = createSprite(200,540);
    boy.addImage(boyImg);
    boy.scale=0.125;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  fill("black")
  textSize(18);

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);

  drawSprites();

  stone1.display();
  ground1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  slingShot.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(lstones,lmango){
 mangoBodyPosition=lmango.body.position,	
 stonesBodyPosition=lstones.body.position,	

        distance=dist(stonesBodyPosition.x,stonesBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
       if(distance<=lmango.r+lstones.r)
  {
           Matter.Body.setStatic(lmango.body,false);
  }
  }

  function keyPreesed(){
	  if(keyCode === 32){
		  Matter.Body.setPosition(stone1.body,{x:100,y:465});
		  attach.Launch(stone1.body);
	  }
  }

