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
}