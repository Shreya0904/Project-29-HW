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

    //level one
    box1= new Box(300,280,30,40);
    box2= new Box(330,280,30,40);
    box3= new Box(360,280,30,40);
    box4= new Box(390,280,30,40);
    box5= new Box(420,280,30,40);
    box6= new Box(450,280,30,40);
    box7= new Box(420,280,30,40);

    //level two
    box8= new Box(330,235,30,40);
    box9=new Box(360,235,30,40);
    box10=new Box(390,235,30,40);
    box11=new Box(420,235,30,40);
    box12=new Box(450,235,30,40);

    //level three
    box13=new Box(360,195,30,40);
    box14=new Box(390,195,30,40);
    box15=new Box(420,195,30,40);

   //top
    box16=new Box(390,155,30,40);
    
    //level one
    box17=new Box(790,190,30,40);
    box18=new Box(820,190,30,40);
    box19=new Box(850,190,30,40);
    box20=new Box(880,190,30,40);
    box21=new Box(910,190,30,40);

    //level two
   box22=new Box(820,150,30,40);
   box23=new Box(850,150,30,40);
   box24=new Box(880,150,30,40);

   //top
   box25=new Box(850,110,30,40);


    polygon=new Polygon(92,185,60);
    slingshot=new Slingshot(this.polygon.body,{x:200,y:250});
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
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

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