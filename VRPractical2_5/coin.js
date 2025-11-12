class Coin {
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.rotation = 0;

        this.obj = document.createElement("a-entity");
        let coin = document.createElement("a-cylinder");
        coin.setAttribute("radius", 2);
        coin.setAttribute("height", 0.1);
        coin.setAttribute("src", "coin.jpg");
        coin.setAttribute("rotation", "-90 0 0");
        coin.setAttribute("repeat", "0.5 0.5");
        coin.setAttribute("offset", "0.25 0.25");
        coin.setAttribute("position", "0 2 0");
        coin.setAttribute("material", "emissive: #ffff00; emissiveIntensity: 0.5");
        this.obj.append(coin);

        this.obj.setAttribute("position", {x: this.x, y: this.y, z: this.z});
        scene.append(this.obj);
    }

    spin (){
        this.rotation += 5;
        this.obj.setAttribute("rotation", {x: 0, y: this.rotation, z: 0});
    }

}

