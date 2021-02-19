const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


var engine, world, object, ground, side1, side2, roof

function setup(){
  createCanvas(800, 400)

  engine = Engine.create()
  world = engine.world

    
  var object_options = {

    restitution: 2.0

  }

  object = Bodies.rectangle(400, 100, 50, 50, object_options)
  World.add(world, object)
  
  //console.log(object)
  
  var ground_options = {

    isStatic: true

  }

  ground = Bodies.rectangle(400, 380, 800, 50, ground_options)
  World.add(world, ground)

  //console.log(ground)

  
  side1 = Bodies.rectangle(20, 200, 50, 800, ground_options)
  World.add(world, side1)

  //console.log(ground)
  
  side2 = Bodies.rectangle(780, 200, 50, 800, ground_options)
  World.add(world, side2)

  
  roof = Bodies.rectangle(400, 20, 800, 50, ground_options)
  World.add(world, roof)



}



function draw(){
  background(0)    
  Engine.update(engine)

 // object.position.x = 200
 // object.position.y = 200

  
  ellipseMode(RADIUS)
  ellipse(object.position.x, object.position.y , 50, 45)

  rectMode(CENTER)
  rect(ground.position.x, ground.position.y , 800, 50)

  rectMode(CENTER)
  rect(side1.position.x, side1.position.y , 50, 800)

  rectMode(CENTER)
  rect(side2.position.x, side1.position.y , 50, 800)

  rectMode(CENTER)
  rect(roof.position.x, roof.position.y , 800, 50)

 
}      
