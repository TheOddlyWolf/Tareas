var garden,rabbit,apple,orangeL,redL,redL2;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;
var applesgroup,orangesLgroup,redLgroup;
var score;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(570,400);
//Mover fondo
garden=createSprite(200,200);
garden.addImage(gardenImg);


//crear sprite rabbit 
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.05;
rabbit.addImage(rabbitImg);
applesgroup = new Group();
orangesLgroup = new Group();
redLgroup = new Group();
score = 0;
}

function draw() {
  background(0);
  text("Puntuación: "+ score, 460,50);
  textSize=3
  //mover el sprite rabbit en el eje X con el mouse
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  

  if(applesgroup.isTouching(rabbit)){
    apple.destroy(rabbit);
    score = score +3;  
   }
   if(orangesLgroup.isTouching(rabbit)){
    orangeL.destroy(rabbit);
    score = score +4;  
   }
   if(redLgroup.isTouching(rabbit)){
    redL.destroy(rabbit);
    score = score -6;  
   }
   if(redLgroup.isTouching(rabbit)){
    redL2.destroy(rabbit);
    score = score -6;  
   }
   createApples();
   createOrange();
   createRed();
   drawSprites();
  
}

function createApples() {
  
  if (frameCount % 60  === 0) {
   apple = createSprite(random(50, 350),40, 10, 10);
   apple.addImage("jucy",appleImg);
   apple.scale=0.07;
   apple.velocityY = 12;
   apple.lifetime = 100;

   apple.depth = rabbit.depth
   rabbit.depth = rabbit.depth + 1;
   applesgroup.add(apple);
   }
}

function createOrange() {
  if (frameCount % 85 === 0) {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage("horaN",orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 12;
orangeL.lifetime = 100;

orangeL.depth = rabbit.depth
rabbit.depth = rabbit.depth + 1;
orangesLgroup.add(orangeL);

  }
}

function createRed() {
  if (frameCount % 70 === 0) {
redL = createSprite(400,40, 10, 10);
redL.addImage("hojar",redImg);
redL.x = Math.round(random(30,370));
redL.scale=0.06;
  redL.velocityY = 15;
  redL.lifetime = 150;
  redL.depth = rabbit.depth
rabbit.depth = rabbit.depth + 1;
redLgroup.add(redL);

  }
 if (frameCount % 80 === 0) {
   redL2 = createSprite(400,40, 10, 10);
   redL2.addImage("hojar",redImg);
redL2.x = Math.round(random(30,370));
redL2.scale=0.06;
redL2.velocityY = 15;
redL2.lifetime = 150;
redL2.depth = rabbit.depth
redLgroup.add(redL2);
  }

}
