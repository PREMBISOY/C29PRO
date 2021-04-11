class Polygon{
    constructor(x,y,radius)
    {
        var options=
        {
            restitution:0.2,
            isStatic:false,
            density:0.3,
            friction:0.5
        }
        polygon = Bodies.circle(50,200,20);
        world.add(world,polygon);
        slingShot = new SlingShot(this.polygon,{x:100,y:200});
    

}
display(){
    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}
    
} 