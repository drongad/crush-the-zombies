const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var ground,rightWall
var bridge, joinPoint
var stones  = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(0,height-15,width*2,20,true)
  rightWall = new Base(width-80,300,450,45,true)
  leftWall = new Base(80,300,450,45,true)
  bridge = new Bridge(17, { x: width / 2 - 400, y: height / 2 });
  joinPoint = new Base(width-280,300,20,20,true)

  Matter.Composite.add(bridge.body, joinPoint);
  jointLink = new Link(bridge, joinPoint);

  for(var i =0;i<8;i++){
    var x = random(width/2-200, width/2+300)
    var y = random(-10,140)
    var stone = new Stone(x,y,80,80)
    stones.push(stone)

  }

}

function draw() {
  background(51);
  Engine.update(engine);
  ground.show()
  rightWall.show()
  leftWall.show()
  joinPoint.show()
  bridge.show()

  for( var stone of stones){
    stone.show()
  }



}
