const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world
var ground;

function preload(){
    polly = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,800)
    engine=Engine.create()
    world = engine.world
    ground = new Ground(600,750,1200,20)
    stand = new Ground(500,500,300,20)
    stand1 = new Ground(920,400,300,20)
    polygon = Bodies.circle(50,200,20)
    box1 = new Box(400,450,40,60)
    box2 = new Box(440,450,40,60)
    box3 = new Box(480,450,40,60)
    box4 = new Box(520,450,40,60)
    box5 = new Box(560,450,40,60)
    box6 = new Box(600,450,40,60)

    box7 = new Box(440,400,40,60)
    box8 = new Box(480,400,40,60)
    box9 = new Box(520,400,40,60)
    box10 = new Box(560,400,40,60)

    box11 = new Box(480,350,40,60)
    box12 = new Box(520,350,40,60)

    box13 = new Box(500,300,40,60)
    
    

    


    
    boxe1 = new Box(840,350,40,60)
    boxe2 = new Box(880,350,40,60)
    boxe3 = new Box(920,350,40,60)
    boxe4 = new Box(960,350,40,60)
    boxe5 = new Box(1000,350,40,60)

    boxe6 = new Box(880,320,40,60)
    boxe7 = new Box(920,320,40,60)
    boxe8 = new Box(960,320,40,60)

    boxe9 = new Box(920,300,40,60)
    



  
   
    
   
    
    World.add(world,polygon)

    slingShot = new SlingShot(this.polygon,{x:100,y:200})




    
}


function draw(){
    background("black")
    Engine.update(engine)
    fill("brown")
    ground.display()
    stand.display()
    stand1.display()

    fill("lightblue")
    box1.display()
    box2.display()
    box3.display()
    box4.display();
    box5.display();
    box6.display()

    fill("lightred");
    box7.display();
    box8.display();
    box9.display();
    box10.display()
    
    fill("lightgreen");
    box11.display()
    box12.display()

    fill("orange")
    box13.display()
    


    
    fill("red")
    boxe1.display()
    boxe2.display();
    boxe3.display();
    boxe4.display();
    boxe5.display();

    fill("blue")
    boxe6.display();
    boxe7.display();
    boxe8.display();

    fill("green")
    boxe9.display();
   
    imageMode(CENTER)
    image(polly,polygon.position.x,polygon.position.y,40,40);

    slingShot.display()

}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})

}
function mouseReleased(){
    slingShot.fly();
}
