var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function createApples(){
apple=createSprite(random(50,350),40,10,10)
//Add image to apple sprite
//Scale the sprite if required
//Gice the velocity so that the apple move dowmloads
//give lifetime to the apple sprite

var select_sprites=Math.round(random(1,2))

if (framecount % 80 == 0){
if (select_sprites == 1){
//call createapples function
}
else{
// call createleaves function          
}
}


}






function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}