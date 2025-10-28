//Challenge 4 (Hint: Use Challenge 2 and 3 as your guide for this challenge)
//1) Create a UFO class similar in logic to the Rocket class except that they fall from the sky.  
// Use at least two components to model the UFO. 
// Add an invade( ) function to make the UFO drop to the ground at random speeds and stay on the ground. 
//2) Create an array of UFOs at random high locations and make them invade.

class Ufo{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = rnd(0.2, 1);
 
        this.obj = document.createElement("a-entity");

        let base = document.createElement("a-cylinder");
        base.setAttribute("height", 1.4);
        base.setAttribute("radius", 4);
        base.setAttribute("color", "darkgray");
        base.setAttribute("position", "0 0.25 0");
        this.obj.append(base);

        let dome = document.createElement("a-sphere");
        dome.setAttribute("height", 1);
        dome.setAttribute("radius", 1.4);
        dome.setAttribute("color", "lightgreen");
        dome.setAttribute("position", "0 0.9 0");
        this.obj.append(dome);

        let opacity = document.createElement("a-sphere");
        opacity.setAttribute("height", 1);
        opacity.setAttribute("radius", 1.85);
        opacity.setAttribute("opacity", 0.7);
        opacity.setAttribute("color", "yellow");
        opacity.setAttribute("position", "0 0.9 0");
        this.obj.append(opacity);

        let bottom = document.createElement("a-sphere");
        bottom.setAttribute("height", 0.2);
        bottom.setAttribute("radius", 2.5);
        bottom.setAttribute("color", "gray");
        bottom.setAttribute("position", "0 -0.3 0");
        this.obj.append(bottom);

        let bottomplatform = document.createElement("a-cylinder");
        bottomplatform.setAttribute("height", 1);
        bottomplatform.setAttribute("radius", 3);
        bottomplatform.setAttribute("color", "black");
        bottomplatform.setAttribute("position", "0 -0.6 0");
        this.obj.append(bottomplatform);

        let leg1 = document.createElement("a-cylinder");
        leg1.setAttribute("height", 5);
        leg1.setAttribute("radius", 0.5);
        leg1.setAttribute("color", "black");
        leg1.setAttribute("position", "-1.25 -1.75 0");
        leg1.setAttribute("rotation", "55 75 0")
        this.obj.append(leg1);

        let legdetail1 = document.createElement("a-sphere");
        legdetail1.setAttribute("radius", 0.55);
        legdetail1.setAttribute("height", 0.2);
        legdetail1.setAttribute("position", " -3.25 -3.175 -0.5 ");
        legdetail1.setAttribute("color", "black");
        this.obj.append(legdetail1);

        
        let leg2 = document.createElement("a-cylinder");
        leg2.setAttribute("height", 5);
        leg2.setAttribute("radius", 0.5);
        leg2.setAttribute("color", "black");
        leg2.setAttribute("position", "0 -1.75 0.75");
        leg2.setAttribute("rotation", "55 180 0")
        this.obj.append(leg2);

        let legdetail2 = document.createElement("a-sphere");
        legdetail2.setAttribute("radius", 0.55);
        legdetail2.setAttribute("height", 0.2);
        legdetail2.setAttribute("position", " 0 -3.4 3.1");
        legdetail2.setAttribute("color", "black");
        this.obj.append(legdetail2);


        let leg3 = document.createElement("a-cylinder");
        leg3.setAttribute("height", 5);
        leg3.setAttribute("radius", 0.5);
        leg3.setAttribute("color", "black");
        leg3.setAttribute("position", "1.25 -1.75 0");
        leg3.setAttribute("rotation", "55 -75 0")
        this.obj.append(leg3);

        let legdetail3 = document.createElement("a-sphere");
        legdetail3.setAttribute("radius", 0.55);
        legdetail3.setAttribute("height", 0.2);
        legdetail3.setAttribute("position", " 3.45 -3.35 -0.45");
        legdetail3.setAttribute("color", "black");
        this.obj.append(legdetail3);

        let tube = document.createElement("a-cylinder");
        tube.setAttribute("height", 0.13);
        tube.setAttribute("radius", 0.7);
        tube.setAttribute("color", "gray");
        tube.setAttribute("position", "-3.15 -3.1 -0.5");
        tube.setAttribute("rotation", "0 0 -58");
        this.obj.append(tube);

        this.obj.setAttribute("position", {x:x,y:y,z:z});
        scene.append(this.obj);
}}