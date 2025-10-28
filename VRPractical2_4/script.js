//let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let rnd = (l, u) => Math.random() * (u - l) + l;

let scene;
let rockets = [];
let ufos = [];
let stars = [];
let astronauts = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");  

 // Challenge 3
//1) Create 100 rockets in a grid pattern on the X-Z plane just below the plane.  Provide each rocket an appropriate random y coordinate below the plane.
//2) Animate each rocket “launching”. 
  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let y = rnd(-50,0);
    let z = rnd(-20,20);
    let r = new Rocket(x,y,z);
    rockets.push(r);
  }


  for(let i = 0; i < 15; i++){
    let x = rnd(-20,20);
    let y = rnd(50,150);
    let z = rnd(-20,20);
    let u = new Ufo(x,y,z);
    ufos.push(u);
  }

  for(let i = 0; i < 250; i++){
    let x = rnd(-100,100);
    let y = rnd(10,100);
    let z = rnd(-100,100);
    let s = new Star(x,y,z);
    stars.push(s);
  }

  for(let i = 0; i < 3; i++){
    let x = rnd(-5,5);
    let y = 0;
    let z = -10;
    let a = new Astronaut(x,y,z);
    astronauts.push(a);
  }


  loop();
})

function loop(){

  for(let r of rockets){
    r.launch();
  }

  for(let u of ufos){
    u.invade();
  }

  for(let s of stars){
    s.move();
  }

  for(let a of astronauts){
    a.walk();
  }

  
  window.requestAnimationFrame( loop );
}
