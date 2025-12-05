let rnd = (l,u) => Math.random() * (u-l) + l
let scene, camera, bullet, enemies = [], ammo_boxes = [], ammo_count = 3, enemy_killed = 0, h = 100, t = 160;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  camera = document.querySelector("a-camera");
  ammoTxt = document.querySelector("#ammo_count");
  healthTxt = document.querySelector("#health");
  enemyTxt = document.querySelector("#enemies_killed");
  gameTxt = document.querySelector("#gameover");
  timerTxt = document.querySelector("#timer");
  winTxt = document.querySelector("#youwin");

  window.addEventListener("keydown",function(e){
    //User can only fire with they press the spacebar and have sufficient ammo
    if(e.key == " " && ammo_count > 0  ){
      bullet = new Bullet();
      ammo_count--;
    }
  })

  for(let i = 0; i<10; i++){
    let x = rnd(-50,50);
    let y = 1; 
    let z = rnd(-50,50);
    let enemy = new Snowman(x,y,z);
    enemies.push(enemy);
  }

  
  setTimeout(loop,100);
  setTimeout(countdown,100);
})

function loop(){
  healthTxt.setAttribute("value", `Health: ${h}`)
  ammoTxt.setAttribute("value", `Ammo: ${ammo_count}`)
  enemyTxt.setAttribute("value", `Score: ${enemy_killed}`)
  for (let enemy of enemies){
    enemy.walk();
    if (bullet && distance(bullet.obj, enemy.obj) < 1.5 && !enemy.die){
      enemy.die = true;
      enemy_killed++;
    }
    if (distance(camera, enemy.obj) < 2){ 
      if (!enemy.checkHit){
        h -= 10;
        enemy.checkHit = true;
          if (h <= 0 && t > 0){
            gameTxt.setAttribute("visible", true);
  } 
  }
} else {
   enemy.checkHit = false;
}
}
  if (enemy_killed >= 10 && t > 0 && h > 0){
    winTxt.setAttribute("visible", true);
  }

  if(bullet){
    bullet.fire();
  }
 
  window.requestAnimationFrame(loop);
}

function countdown(){
  t--;
  timerTxt.setAttribute("value", `Time: ${t}`);
  if (t <= 0 && enemy_killed < 10){
    gameTxt.setAttribute("visible", true);
    t = 0;
  }

  setTimeout(countdown,1000);
}

function distance(obj1,obj2){
  let x1 = obj1.object3D.position.x;
  let y1 = obj1.object3D.position.y;
  let z1 = obj1.object3D.position.z;
  let x2 = obj2.object3D.position.x;
  let y2 = obj2.object3D.position.y;
  let z2 = obj2.object3D.position.z;

  let d = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2) + Math.pow(z1-z2,2));
  return d;
}