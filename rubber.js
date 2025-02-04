class Rubber {
    constructor(x,y) {
        var options = {
        'restitution':5,
          'friction':0.3,
          'density':1.0
        };
        this.body = Bodies.rectangle(x,y,100,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    };
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3);
        stroke('white')
        fill("red")
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop();
      };
}