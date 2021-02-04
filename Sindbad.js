class Sindbad{
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
            friction: 2,
            restitution: 0.8
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadAnimation('r1.png','r2.png','r3.png','r4.png','r5.png','r6.png','r7.png','r8.png','r9.png','r10.png','r11.png','r12.png','r13.png','r14.png','r15.png','r16.png','r17.png','r18.png','r19.png','r20.png');
        this.width = width;
        this.height = height

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;


        imageMode(CENTER);
        animation(this.image,pos.x,pos.y,this.width,this.height);

    }
}