class Box2 {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
          isStatic:true,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push ();
      imageMode (CENTER);
       image (this.image,pos.x,pos.y-100,this.width,200);
      //rectMode(CENTER);
     // fill("red");
     // rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
  