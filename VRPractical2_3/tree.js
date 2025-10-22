class Tree{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let pines = document.createElement("a-cone");
    pines.setAttribute("color","green");
    pines.setAttribute("position","0 1.5 0");
    pines.setAttribute("height","2");
    this.obj.append( pines );
  
    let stump = document.createElement("a-cylinder");
    stump.setAttribute("position","0 0 0");
    stump.setAttribute("color","brown");
    stump.setAttribute("radius","0.25");
    this.obj.append( stump );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}

class Cloud{
  constructor(x, y, z){
    this.obj = document.createElement("a-entity");

    let cloud1 = document.createElement("a-sphere");
    cloud1.setAttribute("radius", 0.5);
    cloud1.setAttribute("position", "0 5 0");
    this.obj.append(cloud1);
    
    let cloud2 = document.createElement("a-sphere");
      cloud2.setAttribute("radius", 0.5);
      cloud2.setAttribute("position", "0.5 5.5 0");
      this.obj.append(cloud2);

    let cloud3 = document.createElement("a-sphere");
        cloud3.setAttribute("radius", 0.5);
        cloud3.setAttribute("position", "1 5 0");
        this.obj.append(cloud3)

    this.obj.setAttribute("position", {x:x, y:y, z:z});
    scene.append(this.obj)
  }
}

class House{
  constructor(x, y, z){
    this.obj = document.createElement("a-entity");

  let roof = document.createElement("a-cylinder");
  roof.setAttribute("radius", 1);
  roof.setAttribute("segments-radial", 3);
  roof.setAttribute("position", "0 1.3 0");
  roof.setAttribute("rotation", "270 0 0");
  roof.setAttribute("color", "red");
  roof.setAttribute("height", 2);
  roof.setAttribute("width", 1.5);

  this.obj.append(roof);

  let base = document.createElement("a-box");
  base.setAttribute("height", 2);
  base.setAttribute("width", 1.5);
  base.setAttribute("depth", 2);
  base.setAttribute("color", "red");
  base.setAttribute("position", "0 0 0");

  this.obj.append(base);

  this.obj.setAttribute("position", {x:x, y:y, z:z});
  scene.append(this.obj);
  }


}