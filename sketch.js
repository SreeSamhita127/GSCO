 var car1, car2, car3, car4, wall;
 var speed1,speed2,speed3,speed4, weight;

function setup() {
  createCanvas(1800,400);
  car1 = createSprite(40,45,50,20);
  car2 = createSprite(40,145,50,20);
  car3 = createSprite(40,245,50,20);
  car4 = createSprite(40,345,50,20);
  wall = createSprite(1750,200,20,400);
  car1.shapeColor = "pink";
  car2.shapeColor = "pink";
  car3.shapeColor = "pink";
  car4.shapeColor = "pink";
  wall.shapeColor = "purple";
  speed1 = random(50,90);
  speed2 = random(50,90);
  speed3 = random(50,90);
  speed4 = random(50,90);
  weight = random(400,1500);
}

function draw() {
 
  if(wall.x - car1.x < (car1.width + wall.width)/2){
    car1.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed /22500; 
  if(deformation < 100){
    car1.shapeColor = "green";
  }
  if(deformation < 180 && deformation > 100){
    car1.shapeColor = "yellow";
  }
  if(deformation > 180){
    car1.shapeColor = "red";
  }}

  if(wall.x - car2.x < (car2.width + wall.width)/2){
    car2.velocityX = 0;
  if(deformation < 100){
    car2.shapeColor = "green";
  }
  if(deformation < 180 && deformation > 100){
    car2.shapeColor = "yellow";
  }
  if(deformation > 180){
    car2.shapeColor = "red";
  }}

  if(wall.x - car3.x < (car3.width + wall.width)/2){
    car3.velocityX = 0;
  if(deformation < 100){
    car3.shapeColor = "green";
  }
  if(deformation < 180 && deformation > 100){
    car3.shapeColor = "yellow";
  }
  if(deformation > 180){
    car3.shapeColor = "red";
  }}

  if(wall.x - car4.x < (car4.width + wall.width)/2){
    car4.velocityX = 0;
  if(deformation < 100){
    car4.shapeColor = "green";
  }
  if(deformation < 180 && deformation > 100){
    car4.shapeColor = "yellow";
  }
  if(deformation > 180){
    car4.shapeColor = "red";
  }}
  background(0); 
  car1.velocityX = speed1;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  car4.velocityX = speed4;
  drawSprites();
  }