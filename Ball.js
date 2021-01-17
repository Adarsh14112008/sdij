class Ball {
    constructor(x) {
      var options = {
          isStatic: false
        
      }
      this.body = Bodies.circle(x,50,20,options);
      this.color=color(random(0,250),random(0,250),random(0,250));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      fill(this.color)
      circle(pos.x, 50, 20);
    }
  };