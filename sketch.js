const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1,block2,block3,block4,block5,block6,block7,block8,block9;

function setup(){
    var canvas = createCanvas(1200,1000);
    engine = Engine.create();
    world = engine.world;
//level 1
block1 = new Box(230,235,30,40);
block2 = new Box(260,235,30,40);
block3 = new Box(290,235,30,40);
block4 = new Box(320,235,30,40);
 block5 = new Box(350,235,30,40);
//level 2
 block6 = new Box(380,195,30,40);
block7 = new Box(410,195,30,40);
block8 = new Box(440,195,30,40);
//top
block9 = new Box(390,155,30,40);
//zameen
ground = new Ground(1190,1000,1200,10);
}


function draw(){
    background('black');
    Engine.update(engine);
    
    block1.display();
    block2.display();
     block3.display();
     block4.display();

    block5.display();
    block6.display();

    block7.display();
    block8.display();
    block9.display();

    ground.display();

           


    drawSprites();
}