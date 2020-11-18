const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score=0;
var backgroundImg;

function preload(){
getbg();
}
function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine.world;
  Engine.run(engine)
  ground=new  Ground(400,264,250,15)
  
  poly=new polygon(100,200,50,50,5)
  slingshot=new sling(poly.body,{x:100,y:200})
  ground2=new  Ground(400+300,264+100,250,15)
  block1=new block(330,235,30,40)
  block2=new block(360,235,30,40)
  block3=new block(390,235,30,40)
  block4=new block(420,235,30,40)
  block5=new block(450,235,30,40)

  block6=new block(360,195,30,40)
  block7=new block(390,195,30,40)
  block8=new block(420,195,30,40)

  block9=new block(390,155,30,40)

  block10=new block(330+300,235+100,30,40)
  block11=new block(360+300,235+100,30,40)
  block12=new block(390+300,235+100,30,40)
  block13=new block(420+300,235+100,30,40)
  block14=new block(450+300,235+100,30,40)

  block15=new block(360+300,195+100,30,40)
  block16=new block(390+300,195+100,30,40)
  block17=new block(420+300,195+100,30,40)

  block18=new block(390+300,155+100,30,40)
}

function draw() {
  if (backgroundImg)
  background(backgroundImg);
  fill("green")
  text("score "+score,width-300,50) 
  ground.display(); 
  ground2.display();
  fill("red")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  fill("blue")
  block6.display();
  block7.display();
  block8.display();
  fill("brown")
  block9.display();

  fill("red")
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  fill("blue")
  block15.display();
  block16.display();
  block17.display();
  fill("brown")
  block18.display();
  poly.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  slingshot.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  slingshot.attach(poly.body)
}
async function getbg(){
  var locate=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var n12= await locate.json();
  var hour=n12.datetime
  var hour1=hour.slice(11,13);
  if(hour1>=06&&hour1<=16){
bg="bg.png"
  }
  else{
      bg="bg2.jpg"
  }
  backgroundImg=loadImage(bg);
}