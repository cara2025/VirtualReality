class Astronaut {
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dz = rnd(0.1, 0.2);
        this.dy = rnd(0.05, 0.1);

        this.obj = document.createElement("a-entity");
        
        let body = document.createElement("a-cylinder");
        body.setAttribute("height", 2);
        body.setAttribute("radius", 0.5);
        body.setAttribute("color", "white");
        body.setAttribute("position", "0 2 0");
        this.obj.append(body);

        let head = document.createElement("a-sphere");
        head.setAttribute("radius", 0.5);
        head.setAttribute("color", "white");
        head.setAttribute("position", "0 3.5 0");
        this.obj.append(head);

        let visor = document.createElement("a-sphere");
        visor.setAttribute("radius", 0.3);
        visor.setAttribute("color", "black");
        visor.setAttribute("position", "0 3.5 0.3");
        this.obj.append(visor);

        let arm1 = document.createElement("a-cylinder");
        arm1.setAttribute("height", 1.5);
        arm1.setAttribute("radius", 0.15);
        arm1.setAttribute("color", "white");
        arm1.setAttribute("position", "0.65 2.5 0");
        arm1.setAttribute("rotation", "0 0 45");
        this.obj.append(arm1);
        
        let arm2 = document.createElement("a-cylinder");
        arm2.setAttribute("height", 1.5);
        arm2.setAttribute("radius", 0.15);
        arm2.setAttribute("color", "white");
        arm2.setAttribute("position", "-0.65 2.5 0");
        arm2.setAttribute("rotation", "0 0 -45");
        this.obj.append(arm2);

        let leg1 = document.createElement("a-cylinder");
        leg1.setAttribute("height", 1.5);
        leg1.setAttribute("radius", 0.2);
        leg1.setAttribute("color", "white");
        leg1.setAttribute("position", "0.25 0.5 0");
        leg1.setAttribute("rotation", "0 0 0");
        this.obj.append(leg1);

        let leg2 = document.createElement("a-cylinder");
        leg2.setAttribute("height", 1.5);
        leg2.setAttribute("radius", 0.2);
        leg2.setAttribute("color", "white");
        leg2.setAttribute("position", "-0.25 0.5 0");
        leg2.setAttribute("rotation", "0 0 0");
        this.obj.append(leg2);

        let gear = document.createElement("a-box");
        gear.setAttribute("height", 1);
        gear.setAttribute("width", 1.2);
        gear.setAttribute("depth", 0.5);
        gear.setAttribute("color", "gray");
        gear.setAttribute("position", "0 2.5 -0.4");
        this.obj.append(gear);


        this.obj.setAttribute("position", {x:x,y:y,z:z});
        scene.append(this.obj);
    }
    walk(){
        this.z += this.dz;
        this.y += this.dy;

        if(this.y > 5){
            this.dy =-this.dy;
        }
        if(this.y < 0){
            this.dy =-this.dy;
        }

        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});  
    }
}