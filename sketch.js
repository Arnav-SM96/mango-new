
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ground;
var boy1;
var s1;
var t1;
const Constraint = Matter.Constraint;
var c1;
var m1, m2, m3, m4, m5, m6;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20);
  boy1= new Boy(200,540,80,100);
  m1= new Mangoes(700,300,40,40);
  m2= new Mangoes(600,230,40,40);
  m3= new Mangoes(730,240,40,40);
  m4= new Mangoes(800,250,40,40);
  m5= new Mangoes(900,200,40,40);
  m6= new Mangoes(800,150,40,40);
	t1= new Tree(750,350,10,10);
	s1 = new Stone(130,440);
	c1= new Chain(s1.body,{x:130, y:440});
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
  Engine.run(engine);
  // Render.run(render);
 }

function draw() {
  rectMode(CENTER);
  background(100,100,100);
  //mouseDragged();
  ground.display();
  t1.display();
  boy1.display();
 // mouseReleased();
 m1.display();
 m2.display();
 m3.display();
 m4.display();
 m5.display();
 m6.display();
  s1.display();
 //d1(s1,m1);
 //d1(s1,m2);
 //d1(s1,m3);
 //d1(s1,m4);
 //d1(s1,m5);
// d1(s1,m6);
  c1.display();
  
 
}

function mouseDragged(){
    Matter.Body.setPosition(s1.body, {x: mouseX , y: mouseY});
    }

    function mouseReleased(){
      c1.fly();
  }

  function keyPressed(){
    if(keyCode === 32){
        c1.attach(s1.body);
    }
}

function d1(lstone,lmango){
	var collision = Matter.SAT.collides(lstone,lmango);
	//if(collision.collided){
	//	console.log("collided");
	//	Matter.Body.setStatic(lmango,false);	
	//}
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }