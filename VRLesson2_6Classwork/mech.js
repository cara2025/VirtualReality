class Mech{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = 0.5;

        this.obj = mech.clondNode(true);
        this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
        scene.append(this.obj);
    }

    fly(){
        this.y += this.dy;
        this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    }
}