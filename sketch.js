const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions = [];

var labelScore = [500,500,500,500,100,100,100,200,200,200];

divisionX = [];

var barrier;

var divisionHeight=300;
var score =0;
var counter = 0;
var gameState = "start";

var show = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Rect(width/2,height,width,20);


  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Rect(k, height-divisionHeight/2, 10, divisionHeight));
  }


  for (var j = 75; j <=width; j=j+50) 
  {
      plinkos.push(new White(j,75, 20));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
      plinkos.push(new White(j,175,20));
  }

    for (var j = 75; j <=width; j=j+50) 
  {
      plinkos.push(new White(j,275,20));
  }
    for (var j = 50; j <=width-10; j=j+50) 
  {
      plinkos.push(new White(j,375,20));
  }  
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);

  End();

   for (var i = 0; i < plinkos.length; i++){
     plinkos[i].display();
   }
 

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

     textSize(25);
     fill("white");

     text(labelScore[k], (k * 80) + 15,550 );
   }

   if (particle != null)
  {
      particle.display();
      Score();
  }

  text("Score:"+score, 30, 20);

   Engine.update(engine);

   drawSprites();

   //Label Scores in each Bucket
}

function mouseReleased(){
    if(gameState !== "end"){
      counter = counter + 1;

      particle = new Color(mouseX, 10, 20);
        } 
}

function End(){
  if(counter === 5 && show === 5){
    gameState = "end";
    textSize(70);
    fill(rgb(220, 0, 50));
    text("GAME OVER", 200,250);
  }
}

function Score(){
  var posX = particle.body.position.x;
  var posY = particle.body.position.y;

  if( posY >= 730){
    if(posX >= 0 && posX <= 320){
      score = score + 500;
      particle = null;
      show = show + 1;
    }

    if(posX >= 321 && posX <= 560){
      score = score + 100;
      particle = null;
      show = show + 1;
    }

    if(posX >= 561 && posX <= 800){
      score = score + 200;
      particle = null;
      show = show + 1;
    }
  }
}