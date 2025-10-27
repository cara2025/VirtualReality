//let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let rnd = (l, u) => Math.random() * (u - l) + l;

let scene;
let rockets = [];
let ufos = [];

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


  //for(let i = 0; i < 10; i++){
    //let x = rnd(-20,20);
    //let y = rnd(20,50);
    //let z = rnd(-20,20);
    //let u = new Ufo(x,y,z);
    //ufos.push(u);
  //}


  loop();
})

function loop(){

  for(let r of rockets){
    r.launch();
  }

  
  window.requestAnimationFrame( loop );
}
