class Paper{
constructor(x,y){
    var options={
         isStatic:false,
         restitution:0.3,
         friction:0.5,
         density:1.2
    }
    this.body=Bodies.circle(x,y,5);
    this.body.shapeColor=(255, 0, 200)
    World.add(world,this.body);
}
display(){};
}