var fixedRect,movingRect
var smallRect,bigRect



function setup() {
  createCanvas(800,400);
 fixedRect=createSprite(400,200,50,100);
 movingRect=createSprite(600,300,50,100);
 fixedRect.shapeColor="red";
 movingRect.shapeColor="yellow";
 fixedRect.debug=true;
 movingRect.debug=true;
smallRect=createSprite(400,300,50,100);
bigRect=createSprite(600,300,50,100)
smallRect.shapeColor="pink";
bigRect.shapeColor="orange";
smallRect.debug=true;
bigRect.debug=true;
smallRect.velocityX=3;
bigRect.velocityX=-3;
}

function draw() {
  background(0);
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 ){
    fixedRect.shapeColor="green";
    movingRect.shapeColor="blue"; 
  }else{
    fixedRect.shapeColor="red";
    movingRect.shapeColor="yellow";
  }
  drawSprites();
}