var canvas;
var music;
var box;
var surface1, surface2, surface3, surface4;
var Ledge, Redge, Tedge;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,550,170,10);
    surface1.shapeColor = "green";
    surface2 = createSprite(275,550,170,10);
    surface2.shapeColor = "blue";
    surface3 = createSprite(470,550,180,10);
    surface3.shapeColor = "yellow";
    surface4 = createSprite(670,550,180,10);
    surface4.shapeColor = "purple";
    
    //create box sprite and give velocity
    box = createSprite(random(20,750),300,20,20);
    box.shapeColor = "white";
  
    //creating edge sprites 
    Ledge = createSprite(10,300,10,600); 
    Redge = createSprite(790,300,10,600);
    Tedge = createSprite(400,10,800,10);

    //making music play
    music.play();

}

function draw() {
    background("black");

    //create edgeSprite
    Ledge.shapeColor = "black";
    Redge.shapeColor = "black";
    Tedge.shapeColor = "black";
    box.bounceOff(Ledge);
    box.bounceOff(Redge);
    box.bounceOff(Tedge);

    //making box move
    box.velocityY = 5;
    if(box.isTouching(surface1)){
        box.velocityY = 0;
        music.stop();
      }
      if(box.isTouching(surface2)){
        box.velocityY = 0;
        music.stop();
      }
      if(box.isTouching(surface3)){
        box.velocityY = 0;
        music.stop();
      }
      if(box.isTouching(surface4)){
        box.velocityY = 0;
        music.stop();
      }
    
    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface1) && box.bounceOff(surface1)){
        box.shapeColor = "green";
      }
      if(box.isTouching(surface2) && box.bounceOff(surface2)){
        box.shapeColor = "blue";
      }
      if(box.isTouching(surface3) && box.bounceOff(surface3)){
        box.shapeColor = "yellow";
      }
      if(box.isTouching(surface4) && box.bounceOff(surface4)) {
        box.shapeColor = "purple";
      }
    drawSprites();
}
