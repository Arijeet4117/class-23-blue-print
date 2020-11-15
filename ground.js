class GROUND{
    constructor(){
        var ground_options = {
            isStatic : true
          }
        
          this.body = Bodies.rectangle(200,380,400,40,ground_options);
          this.width =400 ;
          this.height = 40;
          World.add(earth,this.body);
        
    }

    display(){
        fill("brown");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}