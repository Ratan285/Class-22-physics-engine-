/*
MATTER.JS
*********

2. CREATE A PHYSICS WORLD
1.CREATE AND UPDATE THE ENGINE--manipulate/generate
3. CREATE BODIES.(rect, circle).--shape
4. ADD IT TO THE PHYSICS WORLD--place

var==> declaring a variable, it may vary 
const==>declaring const x=0; x=0 is fixed(anther type of datatype)

Matter.Engine ==>Engine  --NAMESPACING(GIVING NICK NAME)

STEP 1: 
   create Engine
step 2:
add that engine to the world

STEP 3:

CREATE OBJECT

STEP 4:
ADD THE CREATED OBJECT TO THE WORLD
 
*/
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine;
var myWorld
function setup() {
  createCanvas(400,400);
  //ball = createSprite(200, 200, 50, 50);

//STEP 1: 
//create Engine

  myEngine = Engine.create();

  //step 2:
   //add that engine to the world

  myWorld = myEngine.world;

 // STEP 3:

//CREATE OBJECT

  var options ={
    restitution:0.8
  }
  obj = Bodies.rectangle(200,100,50,50,options);


 // STEP 4:
//ADD THE CREATED OBJECT TO THE WORLD
 
  World.add(myWorld,obj);
  console.log(obj.restitution);
  
  

}

function draw() {
  background("lightblue");
  rectMode(CENTER);
  rect(obj.position.x, obj.position.y,50,50);
  
  drawSprites();
}