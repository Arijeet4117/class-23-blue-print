const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var car, earth, ground1,box1,box2;

function setup() {
  createCanvas(400,400);

  car = Engine.create();   //.world
  earth = car.world;

 
  ground1 = new GROUND();
  box1=new BOX(230,50,40,40);
  box2=new BOX(200,150,60,60);
}

function draw() {
  background("orange");  
  Engine.update(car)

  ground1.display();
  box1.display();
  box2.display();
}