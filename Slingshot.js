class Slingshot {

constructor(A,B) {

var options = {

bodyA : A, 
pointB : B,
length : 20,
stiffness : 0.2

}

this.body = Matter.Constraint.create(options);
World.add(world,this.body);
}

display() {

if (this.body.bodyA!=null){
    var pointA = this.body.bodyA.position;
    var pointB = this.body.pointB;

    line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}

fly() {

this.body.bodyA = null;

}

}