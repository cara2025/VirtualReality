class FerrisWheel{
    constructor(x, y, z){
        this.x =x;
        this.y=y;
        this.z =z;
        this.dz = 0.5;

        this.obj = document.createElement("a-entity");
        this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });

        this.pivot = document.createElement("a-entity");
        this.pivot.setAttribute("position", "0 0 0");

        let body = document.createElement("a-entity");
        body.setAttribute("geometry", "primitive: torus; radius-tubular: 0.05; radius: 5");
        body.setAttribute("rotation", "0 0 90");
        body.setAttribute("color", "#e72218");
        body.setAttribute("position", "0 22 0");
        body.setAttribute("scale", " 3 3 3");
        this.pivot.append(body);


        let body2 = document.createElement("a-entity");
        body2.setAttribute("geometry", "primitive: torus; radius-tubular: 0.05; radius: 5");
        body2.setAttribute("rotation", "0 0 90");
        body2.setAttribute("color", "#e72218");
        body2.setAttribute("position", "0 22 -5");
        body2.setAttribute("scale", " 3 3 3");
        this.pivot.append(body2);

        let middle = document.createElement("a-cylinder");
        middle.setAttribute("position", "0 22 -2.5 ");
        middle.setAttribute("radius", 0.5);
        middle.setAttribute("scale", "1 6 1");
        middle.setAttribute("rotation", "90 0 0 ");
        this.pivot.append(middle);

        let sphere = document.createElement("a-sphere");
        sphere.setAttribute("position", "0 22 0");
        this.pivot.append(sphere);

        let sphereback




        this.obj.append(this.pivot)
        this.obj.setAttribute("position", {x: this.x, y: this.y, z: this.z});
        scene.append(this.obj);

    }
}