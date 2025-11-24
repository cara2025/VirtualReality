class mySnowman{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = 0.5;
        this.rotate = false;

        this.obj = snowmanTemplate.cloneNode(true);
        let snowman1 = new mySnowman(10,0,-3);
        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});

        this.obj.addEventListener("click", ()=>{
            this.rotate = true;
        })

        scene.append(this.obj);


    }
    spin(){
        if(this.rotate == true){
            this.y += this.dy;
            this.obj.setAttribute("rotation", {x:0,y:this.y,z:0});
        }
    }
}