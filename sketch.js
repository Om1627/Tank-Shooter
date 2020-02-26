// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var engine,world;
var g;
var tank;
/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    
    createCanvas(1200,500);
    engine=Engine.create();
    world=engine.world;
    g=new Ground(600,475,1200,50);
    tank=new Tanker(PI/7);

}

function draw() {
// Remember to update the Matter Engine and set the background.
background(255);
Engine.update(engine);
g.display();
tank.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}