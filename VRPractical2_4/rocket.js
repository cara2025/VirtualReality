//Challenge 2
//Create a Rocket class using the following guidelines.
//1) Rocket class accepts coordinates x,y, and z when created.
//2) Rocket must consist of at least two components.  Make appropriate adjustments to attributes. Contain the rocket in an entity.
//3) Add animation variables so that each rocket created “flies” up at different speeds. Hint: Random numbers for your delta.
//4) Create launch( ) function which makes the rocket “fly” up

class Rocket{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");
        this.x = x;
        this.y = y;
        this.z = z;
        this.a = 0;
        this.da = rnd(1.5, 3.5);
        this.dy = rnd(0.5, 1);
 

        let body = document.createElement("a-cylinder");
        body.setAttribute("height", 3);
        body.setAttribute("radius", 1);
        body.setAttribute("color", "silver");
        body.setAttribute("position", "0 0.5 0");
        this.obj.append(body);

        let top = document.createElement("a-cone");
        top.setAttribute("height", 1);
        top.setAttribute("scale", "1.05 1.05 1.05");
        top.setAttribute("color", "red");
        top.setAttribute("position", "0, 2.85, 0")
        this.obj.append(top);

        let window = document.createElement("a-circle");
        window.setAttribute("radius", 0.3);
        window.setAttribute("color", "lightblue");
        window.setAttribute("position", "0 1.65 1.01");
        this.obj.append(window);

        let outline = document.createElement("a-circle");
        outline.setAttribute("radius", 0.35);
        outline.setAttribute("color", "black");
        outline.setAttribute("position", "0 1.65 1");
        this.obj.append(outline);

        let side = document.createElement("a-box");
        side.setAttribute("height", 2);
        side.setAttribute("width", 1);
        side.setAttribute("depth", 0.2);
        side.setAttribute("color", "gray");
        side.setAttribute("position", "0.99 0.5 0");
        side.setAttribute("rotation", "0 0 0");
        this.obj.append(side);

        let side15 = document.createElement("a-box");
        side15.setAttribute("height", 0.9);
        side15.setAttribute("width", 1);
        side15.setAttribute("depth", 0.2);
        side15.setAttribute("color", "gray");
        side15.setAttribute("position", "0.84 1.4 0");
        side15.setAttribute("rotation", "0 0 45");
        this.obj.append(side15);

        let side2 = document.createElement("a-box");
        side2.setAttribute("height", 2);
        side2.setAttribute("width", 1);
        side2.setAttribute("depth", 0.2);
        side2.setAttribute("color", "gray");
        side2.setAttribute("position", "-0.99 0.5 0");
        side2.setAttribute("rotation", "0 0 0");
        this.obj.append(side2);

        let side25 = document.createElement("a-box");
        side25.setAttribute("height", 0.7);
        side25.setAttribute("width", 1);
        side25.setAttribute("depth", 0.2);
        side25.setAttribute("color", "gray");
        side25.setAttribute("position", "-0.9 1.55 0");
        side25.setAttribute("rotation", "0 0 45");
        this.obj.append(side25);

        let front = document.createElement("a-box");
        front.setAttribute("height", 1.5);
        front.setAttribute("width", 1);
        front.setAttribute("depth", 0.2);
        front.setAttribute("color", "gray");
        front.setAttribute("position", "0 0 0.99");
        front.setAttribute("rotation", "0 90 0");
        this.obj.append(front);

        let front15 = document.createElement("a-box");
        front15.setAttribute("height", 0.7);
        front15.setAttribute("width", 1);
        front15.setAttribute("depth", 0.2);
        front15.setAttribute("color", "gray");
        front15.setAttribute("position", "0 0.86 0.9");
        front15.setAttribute("rotation", "0 90 45");
        this.obj.append(front15);

        let back = document.createElement("a-box");
        back.setAttribute("height", 1.5);
        back.setAttribute("width", 1);
        back.setAttribute("depth", 0.2);
        back.setAttribute("color", "gray");
        back.setAttribute("position", "0 0 -0.99");
        back.setAttribute("rotation", "0 90 0");
        this.obj.append(back);

        let back15 = document.createElement("a-box");
        back15.setAttribute("height", 0.7);
        back15.setAttribute("width", 1);
        back15.setAttribute("depth", 0.2);
        back15.setAttribute("color", "gray");
        back15.setAttribute("position", "0 0.7 -0.9");
        back15.setAttribute("rotation", "0 90 45");
        this.obj.append(back15);

        let ring = document.createElement("a-torus");
        ring.setAttribute("radius", 0.65);
        ring.setAttribute("tube", 0.001);
        ring.setAttribute("color", "darkgray");
        ring.setAttribute("position", "0 2.1 0");
        ring.setAttribute("rotation", "90 0 0");
        this.obj.append(ring);

        
        let ring2 = document.createElement("a-torus");
        ring2.setAttribute("radius", 0.65);
        ring2.setAttribute("tube", 0.001);
        ring2.setAttribute("color", "darkgray");
        ring2.setAttribute("position", "0 1 0");
        ring2.setAttribute("rotation", "90 0 0");
        this.obj.append(ring2);

        let ring3 = document.createElement("a-torus");
        ring3.setAttribute("radius", 0.65);
        ring3.setAttribute("tube", 0.001);
        ring3.setAttribute("color", "darkgray");
        ring3.setAttribute("position", "0 -0.1 0");
        ring3.setAttribute("rotation", "90 0 0");
        this.obj.append(ring3);

        let ring4 = document.createElement("a-torus");
        ring4.setAttribute("radius", 0.65);
        ring4.setAttribute("tube", 0.001);
        ring4.setAttribute("color", "darkgray");
        ring4.setAttribute("position", "0 -1 0");
        ring4.setAttribute("rotation", "90 0 0");
        this.obj.append(ring4);

        let flame = document.createElement("a-cone");
        flame.setAttribute("height", 1);
        flame.setAttribute("radius-bottom", 0.5);
        flame.setAttribute("color", "orange");
        flame.setAttribute("position", "0 -2 0");
        flame.setAttribute("rotation", "180 0 0");
        this.obj.append(flame);

        let redflame = document.createElement("a-cone");
        redflame.setAttribute("height", 0.5);
        redflame.setAttribute("radius-bottom", 0.3);
        redflame.setAttribute("color", "red");
        redflame.setAttribute("position", "0 -2.1 ");
        redflame.setAttribute("rotation", "180 0 0");
        this.obj.append(redflame);






        this.obj.setAttribute("position", {x:x, y:y, z:z});
        scene.append(this.obj);

        
}
    launch(){
        this.y += this.dy;
        this.a += this.da;
        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z} );
        this.obj.setAttribute("rotation", {x:0, y:this.a, z:0} );
    }

}
