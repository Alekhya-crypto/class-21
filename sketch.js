var fr, mr
var o1,o2,o3,o4


function setup() {
  createCanvas(1200,800);

  fr = createSprite(500,100,50,80);
  fr.shapeColor= "green";
  fr.velocityY = 5;
  
  mr = createSprite(500,800,80,30);
  mr.shapeColor= "green";
  mr.velocityY = -5;

  o1 = createSprite(100,100,50,50);
  o1.shapeColor = "green";

  o2 = createSprite(200,100,50,50);
  o2.shapeColor = "green";

  o3 = createSprite(300,100,50,50);
  o3.shapeColor = "green";

  o4 = createSprite(400,100,50,50);
  o4.shapeColor = "green";
}

function draw() {
  background("black");  

  mr.x = mouseX;
  mr.y = mouseY;

  console.log(mr.x - fr.x);

  if( isTouching(mr,o2) ){
    mr.shapeColor = "red";
    o2.shapeColor = "red";
  }
  else{
    mr.shapeColor = "green";
    o2.shapeColor = "green";
  }

  drawSprites();


} 
function isTouching(r1,r2){
  if(r1.x - r2.x < r2.width/2 + r1.width/2 && r2.x - r1.x < r2.width/2 + r1.width/2 && r2.y - r1.y < r2.height/2 + r1.height/2 && r1.y - r2.y < r1.height/2 + r2.height/2 ){
   return true;
   
  }
  else{
    return false;
  }
}