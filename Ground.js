class Ground{

    constructor(x,y){
        var options = {
           isStatic:true,
           fricton:0.4,
       }

       this.body = Bodies.rectangle(500,625,1200,options)
       World.add(world,this.body);
     }

     display(){

     rectMode(CENTER);
     fill("silver");
     rect(500,625,1200,20);
     }


}