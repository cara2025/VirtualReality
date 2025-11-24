class mySnowman {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = 0.5;
        this.rotate = false;


        this.obj = snowmanTemplate.cloneNode(true);


        this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });


        this.obj.addEventListener("click", () => {
            this.rotate = true;
            console.log("Clicked");
        });

     
        scene.append(this.obj);
    }

    spin() {
        if (this.rotate) {
            this.y += this.dy;
            this.obj.setAttribute("rotation", { x: 0, y: this.y, z: 0 });
        }
    }
}
