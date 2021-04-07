var car,wall;


var speed, weight; 


function setup() {
 createCanvas(1600,400);

 speed=random(55,90)
 weight=random(400,150)
 
car=createSprite(50,200,50,50);
car.velocityX=speed;
car.shapecolor=color(255);

wall=createSprite(1500,200,60,200)
wall.shapecolor=color(80,80,80)
}



function draw() {
  background(255,255,255);  
  drawSprites();
if(wall.x-car.x<(wall.width/2+car.width/2))
{
  car.velocityX=0
  var deformation=0.5 * weight * speed* speed/22500
  if(deformation>180)
{
  car.shapeColor=color(225,0,0);
}
if(deformation<180 && deformation>100)
{
  car.shapecolor=color(230,230,0);
}
if(deformation<100)
{
  car.shapeColor=color(0,255,0);
}
 }
 drawSprites();

}