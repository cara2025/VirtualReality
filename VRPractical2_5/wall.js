class Wall{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;

        this.obj = document.createElement("a-entity");
        let body = document.createElement("a-box");
        body.setAttribute("height", 10);
        body.setAttribute("width", 1);
        body.setAttribute("depth", 1);
        body.setAttribute("src", "wall.jpg");
        body.setAttribute("repeat", ".5 .5");
        this.obj.append(body);
        
        this.obj.setAttribute("position", {x: this.x, y: this.y, z: this.z});
        scene.append(this.obj);
    }
}