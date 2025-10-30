let rnd = (l, u) => Math.random() * (u - l) + l;
let scene;
let mech = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");
  clone = mech.cloneNode(true);
  clone1 = mech.cloneNode(true);
  clone2 = mech.cloneNode(true);
  clone3 = mech.cloneNode(true);
  clone4 = mech.cloneNode(true);

  clone.setAttribute("position",{x:-5,y:15,z:-5});
  clone1.setAttribute("position",{x:10,y:10,z:10});
  clone2.setAttribute("position",{x:15,y:15,z:15});
  clone3.setAttribute("position",{x:-15,y:16,z:-10});
  clone4.setAttribute("position",{x:-10,y:15,z:-25});

  scene.append(clone);
  scene.append(clone1);
  scene.append(clone2);
  scene.append(clone3);
  scene.append(clone4);

  for(let i = 0; i<10;i++){
    let x = rnd(-4,4);
    let y = rnd(10,20);
    let z = rnd(-4,4);
    let m = new Mech(x,y,z, mechTemplate);
    mech.push(m);
  }



 
  loop();
})
function loop(){

  for(let m of mech){
    m.fly();
  }


  window.requestAnimationFrame( loop );
}
