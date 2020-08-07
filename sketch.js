const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4, box5;
var pig1, pig2;
var woodylog,log, log1,log2;
var THEBIRDY;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(920,320,70,70);
    box2 = new Box(700,320,70,70);
    box3 = new Box(920,240,70,70);
    box4 = new Box(700,240,70,70);
    box5 = new Box(810,160,70,70);
    
    ground = new Ground(600,height,1200,20)

    pig1 = new Piggy(810,350);
    pig2 = new Piggy(810,220);

    woodylog = new Woody(810,260,300,PI/2);
    log = new Woody(810,180,300,PI/2);
    log1 = new Woody(760,120,150,PI/7)
    log2 = new Woody(870,120,150,-PI/7)

    THEBIRDY = new Birdy(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();

    pig1.display();
    pig2.display();
    woodylog.display();
    log.display();
    log1.display();
    log2.display();

    THEBIRDY.display();
}
/*
Degrees - less accuracy
RADIANS - accurate

Degrees - 0 - 360 
Radians - 0 - 2pi
pi = 22/7

360 degrees = 2pi radians
180 degrees = pi radians
90 degrees = pi/2 radians
60 degrees = pi/3 radians
45 degrees = pi/4 radians
30 degrees = pi/6 radians
*/

