class Star{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dx = rnd(-0.1, 1);
        this.dy = rnd(-0.1, 1);
        this.dz = rnd(-0.1, 1);

        this.obj = document.createElement("a-entity");

        let star = document.createElement("a-sphere");
        star.setAttribute("radius", 0.2);
        star.setAttribute("color", "white");
        star.setAttribute("position", "0 0 0");
        this.obj.append(star);

        this.obj.setAttribute("position", {x:x,y:y,z:z});
        scene.append(this.obj);


    }  
    move(){
        this.x += this.dx;
        this.y += this.dy;
        this.z += this.dz;
        
        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});

        
        if (this.x > 100 ){
            this.x = -100;
        }
        if (this.x < -100 ){
            this.x = 100;
        }
        if (this.y > 100 ){
            this.y = 50;
        }
        if (this.y < 10 ){
            this.y = 50;
        }
        if (this.z > 100 ){
            this.z = -100;
        }
        if (this.z < -100 ){
            this.z = 100;
        }
    }
}