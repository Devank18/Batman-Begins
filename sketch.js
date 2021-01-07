const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, drop;
var Raindrops = [];
var Thunders = [];
var cloudImg, manImg;
var umbrella, thunder;

function preload() {
    cloudImg = loadImage("image/cloud.png");
    manImg = loadImage("image/man.png");
}

function setup() {
    createCanvas(400, 800);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200, 790, 400, 20);
    umbrella = new Umbrella();

    thunder = new Lightning();

}

function draw() {
    background('#141C30')
    Engine.update(engine);


    if (frameCount % 1 === 0) {
        drop = new Raindrop();
        Raindrops.push(drop);
    }

   

    for (var j = 0; j < Raindrops.length; j++) {
        if (Raindrops[j] !== null) {
            umbrella.display();
            Raindrops[j].display();
        }
    }

    image(manImg, 96,600);

    updatePos();

    

    if(frameCount % 200 === 0){
        thunder = new Lightning();
        Thunders.push(thunder);
    }

    for(var k = 0; k < Thunders.length; k++){
        if(frameCount % 201 === 0){
            Thunders[k].display();
        }
        else if(frameCount % 455 === 0){
            Thunders = [];
        }
    }
    

    cloudImg.resize(236,98);
    image(cloudImg, -60 ,-25);
    image(cloudImg, 60 ,-25);
    image(cloudImg, 200 ,-25);


    ground.display();
    //umbrella.display();
}

function updatePos() {
    for (var i = 0; i < Raindrops.length; i++) {
        if (Raindrops[i] !== null) {
            if (Raindrops[i].body.position.y > 760) {
                Raindrops[i].body.position.y = 830;
                Raindrops.splice(i ,1);
            }
        }
    }
}