
function preload(){

  //pre-load images
  jaxon_running =  loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg = loadImage ("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here


// background moving
path = createSprite(200,200)
path.addImage(pathImg)
path.velocityY = 4
path.scale = 1.2;

jaxon = createSprite(200,300,150,150)
jaxon.addAnimation ("Runner",jaxon_running);
jaxon.scale = 0.1
}

function draw() {
  background(0);
if(path.y > 400) {

path.y = height/2;
}

drawSprites();
}
