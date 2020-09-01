var monkey, monkeyImg, monkey_running;
var bananaImg,BananaGroup,banana;
var obstacleImg, obstacle;
var back, backImg;
var score;
var ObstaclesGroup;
var ground;
var PLAY=1;
var END=0;
var gameState=PLAY;
var score;

function preload(){
backImg=loadImage("jungle.jpg");  
monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");  
obstacleImg=loadImage("stone.png");
 bananaImg=loadImage("banana.png"); 
}

function setup() {
  createCanvas(600, 400);
  back=createSprite(400,200,40,40);
  back.addImage("jungle.jpg",backImg); 
monkey=createSprite(60,300,20,50);
 monkey.addAnimation("running",monkey_running); 
monkey.scale=0.1;  
ground=createSprite(380,370,1200,10);
ground.visible=false;
BananaGroup = new Group();
ObstaclesGroup = new Group();
score=0;
}

function draw() {
 background("black"); 
 stroke("white");
 textSize(20);
 fill("white");
 ground.x=ground.width/2;
monkey.collide(ground);

if(gameState===PLAY){
ground.velocityX=-4;

if (ground.x<0) {
ground.x=ground.width/2;
}

if(keyDown("space")){
monkey.velocityY=-12; 
}
text("Score:" + score,160,50);

spawnBanana();
spawnObstacles();

if (frameCount%160===0) {
banana = createSprite(400,250,20,20);
banana.y = Math.round(random(220,260));
banana.addImage("banana.png",bananaImg);
banana.scale = 0.05;
banana.velocityX =-3;
BananaGroup.add(banana);
}
else{  
if(frameCount%200===0) {
var obstacle = createSprite(400,250,20,20);
obstacle.y = Math.round(random(350,350));  
obstacle.addImage("stone.png",obstacleImg);
obstacle.scale = 0.1;
obstacle.velocityX =-3;
ObstaclesGroup.add(obstacle);
}
}
}
if (monkey.isTouching(ObstaclesGroup)){
gameState=END;
text("Game Over",140,50);
ground.velocityX=0;
ObstaclesGroup.setVelocityXEach(0);
BananaGroup.setVelocityXEach(0);
ObstaclesGroup.setLifetimeEach(-1);
BananaGroup.setLifetimeEach(-1);
}

if (monkey.isTouching(BananaGroup)) {
BananaGroup.destroyEach();
score=score+2;
}

monkey.velocityY = monkey.velocityY + 0.55;
 
drawSprites();  
}

function spawnBanana () {
}

function spawnObstacles() {
} 