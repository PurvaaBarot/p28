class Throw{
    constructor(bodyA,pointB){
        var options = {
            bodyA :bodyA,
            pointB :pointB,
            stiffness:0.01,
            length:10
        }
        this.pointB=pointB
        this.Throw=Matter.Constraint.create(options);
        World.add(world,this.Throw);
    }
       fly(){
           this.Throw.bodyA = null
       }
       display(){
           
       }
}