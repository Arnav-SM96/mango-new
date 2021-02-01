class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
           // length: 10
        }
        this.pointB = pointB
        this.cc = Constraint.create(options);
        World.add(world, this.cc);
    }

    attach(body){
        this.cc.bodyA = body;
    }

    fly(){
        this.cc.bodyA = null;
    }

    display(){
        if(this.cc.bodyA){
            var pointA = this.cc.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}