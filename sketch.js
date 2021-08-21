var iss, issImg;
var spaceBg;
var spaceCraft1, spaceCraft2, spaceCraft3, spaceCraft4;
var spaceCraft1Img, spaceCraft2Img, spaceCraft3Img, spaceCraft4Img;
var hasDocked = false;

function preload(){
  issImg = loadImage("Images/iss.png");
  spaceBg = loadImage("Images/spacebg.jpg");
  spaceCraft1Img = loadImage("Images/spacecraft1.png");
  spaceCraft2Img = loadImage("Images/spacecraft2.png");
  spaceCraft3Img = loadImage("Images/spacecraft3.png");
  spaceCraft4Img = loadImage("Images/spacecraft4.png");
}

function setup() {
  createCanvas(900,600);
  spaceCraft = createSprite(400, 200, 50, 50);

  iss = createSprite(400,200);
  iss.addImage(issImg);
}

function draw() {
  background(spaceBg); 

  if(!hasDocked){
    // spaceCraft1.addImage(spaceCraft1Img);
    // if(keyDown("up")){
    //   spaceCraft2.addImage(spaceCraft2Img);
    // }
  }

  drawSprites();
}