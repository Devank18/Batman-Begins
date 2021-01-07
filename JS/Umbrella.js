class Umbrella{
    constructor(){
        var options = {
            restituiton: 0.5,
            friction: 0,
            density: 1.2,
            isStatic: true
        }

        this.x = 206;
        this.y = 600;

        this.img = loadImage("image/umbrella.png");

        this.body = Bodies.circle(this.x, this.y , 80, options);
        this.radius = 80;
        World.add(world, this.body);
    }
    display(){
        push();
        fill("white");
        ellipseMode(CENTER);
        image(this.img, this.x-80, this.y-80);
        //circle(this.x , this.y , this.radius * 2);
    }
}