const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(600,height,1200,20);
    base1=new Ground(390,300,250,10);
    base2=new Ground(860,220,250,10);

    box1= new Box(300,280,30,40);
    box2= new Box(330,280,30,40);
    box3= new Box(360,280,30,40);
    box4= new Box(390,280,30,40);
    box5= new Box(420,280,30,40);
    box6= new Box(450,280,30,40);
    box7= new Box(420,280,30,40);

    

    polygon=new Polygon(92,185,60);
    //slingshot=new Slingshot(this.polygon,{x:200,y:250});
    Engine.run(engine);
}

function draw(){ 
    background("red");
    //Engine.update(engine);

    ground.display();
    base1.display();
    base2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    polygon.display();
    slingshot.display();

 text(mouseX+","+mouseY,mouseX,mouseY)
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}