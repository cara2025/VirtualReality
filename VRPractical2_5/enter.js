class Enter{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;

        this.obj = document.getElementById("enterTemplatePillar").clondeNode(true);
        this.obj.setAttribute("visible", "true");

        

        //let left_towerb = document.createElement("a-box");
        //left_towerb.setAttribute("height", 12);
        //left_towerb.setAttribute("position", "-6 0 0");
        //left_towerb.setAttribute("color", "#F0ECA1");
        //this.obj.append(left_towerb);

        //let left_tower_red = document.createElement("a-box");
        //left_tower_red.setAttribute("height", 0.2);
        //left_tower_red.setAttribute("width", 1.1);
        //left_tower_red.setAttribute("position", "-6 6 0");
        //left_tower_red.setAttribute("depth", 1.1);
        //left_tower_red.setAttribute("color", "#B00000");
        //this.obj.append(left_tower_red);



        scene.append(this.obj);
    }
}