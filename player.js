class Player {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.image = loadImage("polygon.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(polygon_img, player.position.x, player.position.y,40,40);
    }
  } 