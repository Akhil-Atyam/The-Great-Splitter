
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var player;
var tramp;
var lol;
var spike;
var plrCollider;

function preload()
{
	
}

function setup() {
	createCanvas(1200,500);
	

	engine = Engine.create();
    // lol = Matter.Render.create({
	// 	element:document.body,
	// 	engine:engine
	// })
	world = engine.world;
	ground = Bodies.rectangle(600,500,100000,400,{isStatic:true});
	World.add(world,ground);
	ground = Bodies.rectangle(800,200,500,650,{isStatic:true});
	World.add(world,ground);
	
	player = new Player(200,200,null);
	Engine.run(engine);
	tramp = new Trampoline(200,280);
	spike = new Spike(800,-175);


}


function draw() {

rectMode(CENTER);
background(0,200,255);
drawSprites();
//Matter.Render.run(lol)
tramp.display();
camera.zoom = 0.7;
fill("green");
  noStroke();	
rect(600,500,100000,400);
rect(800,200,500,650);
player.display();
spike.display();



}
function Spiked(){
	Body.setPosition(player.Pc, {x:200,y:200});
Body.setVelocity(player.Pc,{x:0,y:0})
}




