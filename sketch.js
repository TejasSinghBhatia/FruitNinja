
var knifeSword,Restart;
var knifeImage,Fruit1Image,Fruit2Image,Fruit3Image;             var AlienImage,Fruit4Image,gameOverImage,RestartImage;
var SwooshSound,gameOverSound;

var SCORE = 0;
var PLAY = 1;
var END = 0;
var gameState = 1;

function preload(){
knifeImage = loadImage("sword.png")
Fruit1Image = loadImage("fruit1.png")
Fruit2Image = loadImage("fruit2.png")
Fruit3Image = loadImage("fruit3.png")
Fruit4Image = loadImage("fruit4.png")
AlienImage = loadImage("alien1.png")
gameOverImage = loadImage("gameover.png")
RestartImage = loadImage("refresh.png");
SwooshSound = loadSound("knifeSwooshSound.mp3");
gameOverSound = loadSound("gameover.mp3");
}
function setup(){
createCanvas(520,500);
knifeSword = createSprite(500,250,30,30);
knifeSword.addImage(knifeImage);
knifeSword.scale = 0.5;

Restart = createSprite(260,250,100,100);
Restart.scale =0.2;
Restart.addImage(RestartImage)
  
fruitsGroup = createGroup();
aliensGroup = createGroup();
}
function draw(){
background("SkyBlue");
  
if(gameState === PLAY){
if(knifeSword.isTouching(fruitsGroup)){
fruit.destroy();
SCORE = SCORE+1;
SwooshSound.play();
}
fruits();
Alien();

knifeSword.x = World.mouseX
knifeSword.y = World.mouseY

if(knifeSword.isTouching(aliensGroup)){
fruitsGroup.destroyEach();
aliensGroup.destroyEach();
gameOverSound.play();
gameState = END;
}
Restart.visible = false;

}else if(gameState === END){
knifeSword.addImage(gameOverImage);
knifeSword.scale = 1.5;
knifeSword.x = 270;
knifeSword.y = 150;

Restart.visible = true;

if(mousePressedOver(Restart)){

reset();
}
}
   
text("SCORE:"+SCORE,400,50);

drawSprites();
}                      
function fruits(){
if(frameCount%80===0){
fruit = createSprite(400,200,20,20);
fruit.scale = 0.2
r=Math.round(random(1,4));
if(r == 1){
fruit.addImage(Fruit1Image);
} else if(r == 2){
fruit.addImage(Fruit2Image)
} else if(r == 3){
fruit.addImage(Fruit3Image)
} else if(r == 4){
fruit.addImage(Fruit4Image)
}
fruit.y = Math.round(random(50,340));
fruit.velocityX = -7;
fruit.setLifetime=100;
fruitsGroup.add(fruit);

position = Math.round(random(1,2))
if(position==1){
fruit.x=400;
fruit.velocityX = -(7+(SCORE/4));
}
if(position==2){
fruit.x=0;
fruit.velocityX=(7+(SCORE/4))
}
}
}

function Alien(){
if(frameCount%200===0){
alien = createSprite(400,200,20,20);
alien.addImage(AlienImage);
alien.y = Math.round(random(100,300));
alien.velocityX = -8;
alien.setLifetime = 50;
aliensGroup.add(alien);
}
}
function reset(){
gameState = PLAY;
Restart.visible = false;
knifeSword.addImage(knifeImage);
knifeSword.scale = 0.5;
SCORE = 0
}