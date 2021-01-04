const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,ball;
var ground;
function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(500,580,1000,20);
    box1 = new Box2(700,570,200,20);
    box2=new Box(600,500,20,150);
    box3=new Box(800,500,20,150);
    ball=new Ball(200,100,40);
}

function draw(){
    background(255);
    Engine.update(engine);
    box1.display();
   ground.display();
   box2.display();
   box3.display();
   ball.display();
   fill("black");
   textSize(25);
   text("press space to move ball up",100,50)
}
function keyPressed(){
    if(keyCode==32){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
    }
}