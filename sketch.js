


function preload()
{ 
	c1=loadAnimation("images/CHARACTER.png","images\CHARACTER2 (1).png","images\CHARACTER2 (2).png","images\CHARACTER2 (3).png","images\CHARACTER2 (4).png")
	bg=loadImage("images\BACKGROUND IMAGE.jpg")
	obstacle1=loadImage("images\OBSTACLE 1.png")
	obstacle2=loadImage("images\OBSTACLES_3.png")
	obstacle3=loadImage("images\OBSTACLE_4.png")
	stone1=loadImage("images\STONE 1.png")
	stone2=loadImage("images\STONE 2.png")
	
}

function setup() {
	createCanvas(800, 700);
ground=createSprite(400,600,800,20);

	

	//Create the Bodies Here.



  
}


function draw() {
  rectMode(CENTER);
  background(bg);

  spawnObstacles();
  drawSprites();
 
}
function spawnObstacles (){
if(World.framecount%60===0){
	var obstacle1 = createSprite(400,625)
obstacle1.velocityX= -6

obstacle1.addImage(obstacle1)
}


}



