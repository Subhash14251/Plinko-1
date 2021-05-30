const Engine=Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Events= Matter.Events;

var world, engine;

var particles= [];
var plinkos= [];
var divisions=[];   

 var DivisionHeight= 300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

 
for(var k=0; k <= width; k =k+80){
  divisions.push(new Divison(k, height-DivisionHeight/2, 10 , DivisionHeight))
}
  
ground1= new Ground(400,395,200,10);


Engine.run(engine);

}

function draw() {

Engine.update(engine);


for(var k=0; k < divisions.length; k++){
  divisions[k].display();
}

  background(0);  
  
  ground1.display();
}