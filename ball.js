class Ball {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.5,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius=radius;
      this.image=loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push ();
      imageMode(CENTER);
      image (this.image,pos.x,pos.y+20,this.radius,this.radius);
      //ellipseMode(RADIUS);
     // fill ("purple");
     //ellipse(pos.x, pos.y, this.radius, this.radius);
      pop();
    }
  };
  