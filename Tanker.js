class Tanker {
  constructor(angle) {
      var options = {
      isStatic: true
     }
     this.body=Bodies.rectangle(150,400,100,30,options);
     this.width=100;
     this.height=30;
     Matter.Body.setAngle(this.body,angle);
     World.add(world,this.body);
    };

    display(){
      // Draw the tanker the way you like.
      var pos=this.body.position;
      var angle=this.body.angle;
      
     push();
     translate(pos.x,pos.y);
     rotate(angle);
    
     pop();
     rectMode(CENTER);
     rect(pos.x,pos.y,this.width,this.height);
      // You could also use an image if you want a specific look
      ;
      
      ellipseMode(RADIUS);
      ellipse(100,420,55,55);
   
      rectMode(CENTER);
      rect(100,440,120,80);
    };
}
