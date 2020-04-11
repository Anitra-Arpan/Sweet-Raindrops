class Raindrop {
    constructor(x,y,r) {
      var options = {
        isStatic : false
      }
      this.body = Bodies.circle(x,y,r,options);
      World.add(world, this.body);
    };
  
    display(){
      fill(num);
      ellipseMode(CENTER);
      circle(this.body.position.x,this.body.position.y,this.body.circleRadius);
    }
  }