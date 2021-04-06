var bullet,thikness;
var speed,weight,wall;
function setup() {
  createCanvas(1600,400);
  wall= createSprite(1200, 200,thikness,height/2);
  bullet= createSprite(200, 200, 102, 10);
  speed=random(55,90)
  weight=random(400,1500)
  thikness=random(23,83)
  bullet.velocityX = speed;
}

function draw() {
  background(2);
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5*speed*weight*thikness*speed/22500;
    if(deformation>180);
    {
      bullet.shapeColor=color("green");
    }
    if(deformation<180 && deformation>100)
    {
      bullet.shapeColor=color("blue");
    }
   if(deformation<100);
   {
     bullet.shapeColor=color("red")
   }
  }
  drawSprites();
}
