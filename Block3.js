class Block3 {
    constructor(x, y,width,height) {
      var options = {
          'isStatic': false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      
      push();
      fill("pink");
      translate(pos.x, pos.y);
      rect(0,0,this.width,this.height);
      pop();
    }
  }