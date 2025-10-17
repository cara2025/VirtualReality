
window.addEventListener("DOMContentLoaded",function() {
    scene = this.document.querySelector("a-scene");

    car = this.document.querySelector("#car");
    car.a = 0;
    car.da = 0.05;
    carLoop();

    pokeball = this.document.querySelector("#pokemonball");
    pokeball.a = 0;
    pokeball.da = 1;
    rotatePokeball();

    rocket = this.document.querySelector("#rocket");
    rocket.a = 0;
    rocket.da = 0.02;
    rocketFly();


    dude = this.document.querySelector("#dude");
    dude.a = 1;
    dude.da = 0.005;
    dudegrow();


    sun = this.document.querySelector("#sun"); 
    sun.a = 0;
    sun.da = 0.005;
    sunfadein();
    
})


//Make the car move to the left.

function carLoop(){
    car.a -= car.da;
    car.setAttribute("position", {x: car.a, y:0, z:0});
    window.requestAnimationFrame(carLoop);

}

//Make the pokeball rotate on the x axis

function rotatePokeball(){
    pokeball.a += pokeball.da;
    pokeball.setAttribute("rotation", {x: pokeball.a, y:0, z:0});
    window.requestAnimationFrame(rotatePokeball);
}
//Make the rocket fly up.

function rocketFly(){
    rocket.a += rocket.da;
    rocket.setAttribute("position", {x:2, y: rocket.a, z: -5});
    window.requestAnimationFrame(rocketFly);
}


//Make the dude “grow”

function dudegrow(){
    dude.a += dude.da;
    dude.setAttribute("scale", {x: dude.a, y: dude.a, z: dude.a});
    window.requestAnimationFrame(dudegrow);
}

//Make the sun fade in

function sunfadein(){
    sun.a += sun.da;
    sun.setAttribute("material", "opacity", sun.a);
    window.requestAnimationFrame(sunfadein);
}

