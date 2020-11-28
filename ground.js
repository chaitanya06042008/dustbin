class Ground{
    constructor(x, y, width, height){
  var groundOptions={
      isStatic:true,
      friction: 3
  }
        this.body = Bodies.rectangle(x, y, width, height, groundOptions)
        this.width=width
        this.height = height
        World.add(world, this.body)
  
    }  
  display(){
     var pos1 = this.body.position
      rectMode(CENTER)
      fill("brown")
      rect(pos1.x, pos1.y, this.width, this.height)
  }
  }
  