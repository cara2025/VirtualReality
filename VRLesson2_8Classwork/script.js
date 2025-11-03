let target;
//In Codespaces goto VRLesson2_8Classwork. Modify the HTML to “change” the rotation point of the target to the bottom of the target.  
// Make the target start off “standing” straight up and then fall once to the ground.  

window.addEventListener("DOMContentLoaded",function() {
  target = document.querySelector("#targetentity");
  target.a = 0;
  target.da = -1;
  target.y = 2.5;
  target.dy = -0.03


  loop();
})

function loop(){
  target.a += target.da;
  if (target.a < -90){
    target.a = - target.da;
  }
  target.y += target.dy;
  if (target.y < 0){
    target.y = 2.5;
    target.a = 0;
  }
  target.setAttribute("rotation",{x:target.a, y:0, z: 0});
  target.setAttribute("position",{x:0, y:target.y, z:0});

  window.requestAnimationFrame( loop );
}