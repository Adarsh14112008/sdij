
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10,ball11,ball12,ball13;
var ball14,ball15,ball16,ball17,ball18,ball19,ball20,ball21,ball22,ball23,ball24,ball25,ball26,ball27,ball28,ball29,ball30,ball31,ball32,ball33;
var wall34,wall35,wall36,wall37,wall38,wall39,ball40,ball41,ball42,ball43,ball44,ball45,ball46,ball47,ball48,ball49,ball50,ball51,ball52,ball53;
var B1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1=new Ground(400,695,800,10)
wall1=new Ground(450,590,10,200)
wall2=new Ground(350,590,10,200)
wall3=new Ground(250,590,10,200)
wall4=new Ground(550,590,10,200)
wall5=new Ground(650,590,10,200)
wall6=new Ground(750,590,10,200)
wall7=new Ground(150,590,10,200)
wall8=new Ground(50,590,10,200)
ball1=new Balls(400,100)
ball2=new Balls(450,100)
ball3=new Balls(500,100)
ball4=new Balls(550,100)
ball5=new Balls(600,100)
ball6=new Balls(650,100)
ball7=new Balls(700,100)
ball8=new Balls(750,100)
ball9=new Balls(350,100)
ball10=new Balls(300,100)
ball11=new Balls(250,100)
ball12=new Balls(200,100)
ball13=new Balls(150,100)
ball14=new Balls(100,100)
ball15=new Balls(50,100)
ball16=new Balls(425,200)
ball17=new Balls(475,200)
ball18=new Balls(525,200)
ball19=new Balls(575,200)
ball20=new Balls(625,200)
ball21=new Balls(675,200)
ball22=new Balls(725,200)
ball23=new Balls(775,200)
ball24=new Balls(375,200)
ball25=new Balls(325,200)
ball26=new Balls(275,200)
ball27=new Balls(225,200)
ball28=new Balls(175,200)
ball29=new Balls(125,200)
ball30=new Balls(75,200)
ball31=new Balls(25,200)
ball32=new Balls(400,300)
ball33=new Balls(450,300)
ball34=new Balls(500,300)
ball35=new Balls(550,300)
ball36=new Balls(600,300)
ball37=new Balls(650,300)
ball38=new Balls(700,300)
ball39=new Balls(750,300)
ball40=new Balls(350,300)
ball41=new Balls(300,300)
ball42=new Balls(250,300)
ball43=new Balls(200,300)
ball44=new Balls(150,300)
ball45=new Balls(100,300)
ball46=new Balls(50,300)
ball47=new Balls(425,400)
ball48=new Balls(375,400)
ball49=new Balls(325,400)
ball50=new Balls(275,400)
ball51=new Balls(225,400)
ball52=new Balls(175,400)
ball53=new Balls(125,400)
ball54=new Balls(75,400)
ball55=new Balls(25,400)
ball56=new Balls(475,400)
ball57=new Balls(525,400)
ball58=new Balls(575,400)
ball59=new Balls(625,400)
ball60=new Balls(675,400)
ball61=new Balls(725,400)
ball62=new Balls(775,400)
B1=new Ball(400)
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display()
  wall1.display()
  wall2.display()
  wall3.display()
  wall4.display()
  wall5.display()
  wall6.display()
  wall7.display()
  wall8.display()
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  ball6.display()
  ball7.display()
  ball8.display()
  ball9.display()
  ball10.display()
  ball11.display()
  ball12.display()
  ball13.display()
  ball14.display()
  ball15.display()
  ball16.display()
  ball17.display()
  ball18.display()
  ball19.display()
  ball20.display()
  ball21.display()
  ball22.display()
  ball24.display()
  ball25.display()
  ball26.display()
  ball27.display()
  ball28.display()
  ball29.display()
  ball30.display()
  ball31.display()
  ball32.display()
  ball33.display()
  ball34.display()
  ball35.display()
  ball36.display()
  ball37.display()
  ball38.display()
  ball39.display()
  ball40.display()
  ball41.display()
  ball42.display()
  ball43.display()
  ball44.display()
  ball45.display()
  ball46.display()
  ball47.display()
  ball48.display()
  ball49.display()
  ball50.display()
  ball51.display()
  ball52.display()
  ball53.display()
  ball54.display()
  ball55.display()
  ball56.display()
  ball57.display()
  ball58.display()
  ball59.display()
  ball60.display()
  ball61.display()
  ball62.display()
  B1.display()


  
  
  drawSprites();
  text(mouseX+","+mouseY, mouseX,mouseY)
}
function ball(x){
	new Balls(x,150,10)

}


