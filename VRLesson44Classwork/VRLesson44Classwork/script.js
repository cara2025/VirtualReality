let scene, boxes = [];
let rnd = (l,u) => Math.random()*(u-l)+l;
window.onload = function(){
  scene = document.querySelector("a-scene");
  /* Challenge
     Create 10 random boxes through the world
  */
  for (let i=0;i<10;i++){
    let x = rnd(-5,5);
    let y = rnd(0,3);
    let z = rnd(-5,5);
    let box = new Box (x,y,z);
    boxes.push(box);
  }
 
}


function loop(){
  /* Challenge 
     Make the boxes blast off
  */
  for (let box of boxes){
    box.blast();
  }
  window.requestAnimationFrame( loop )
  
}