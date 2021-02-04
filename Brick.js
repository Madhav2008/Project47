class Brick{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            friction : 2
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage('brick.png');
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;


        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}