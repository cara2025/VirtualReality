class Body{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;

        this.obj = document.createElement("a-entity");
        let body = document.createElement("a-cylinder");
        body.setAttribute("height", 5);
        body.setAttribute("radius", 50);
        body.setAttribute ("open-ended", "true");
        body.setAttribute("material", "side: double");
        body.setAttribute("src", "wall.jpg");
        body.setAttribute("repeat", "10 10");
        body.setAttribute("theta-start", "0");
        body.setAttribute("theta-length", "160");
        this.obj.append(body);

        let body2 = document.createElement("a-cylinder");
        body2.setAttribute("height", 5);
        body2.setAttribute("radius", 50);
        body2.setAttribute ("open-ended", "true");
        body2.setAttribute("material", "side: double");
        body2.setAttribute("src", "wall.jpg");
        body2.setAttribute("repeat", "10 10");
        body2.setAttribute("theta-start", "180");
        body2.setAttribute("theta-length", "160");
        this.obj.append(body2);

        this.obj.setAttribute("position", {x: this.x, y: this.y, z: this.z});
        scene.append(this.obj);
    }
}