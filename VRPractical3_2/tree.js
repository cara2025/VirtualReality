class Tree {
  constructor(x, y, z) {
    
    this.obj = document.getElementById("tree").cloneNode(true);
    let tree1 = new Tree(10,9,2);
    scene.append(tree1);


    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = -0.1; 
    this.r = 0;     
    this.dr = 2;   
    this.fall = false;

    scene.append(this.obj);
    
    this.obj.addEventListener("click", () => {
      this.fall = true;
    });
  }

  spindown() {
    if (this.fall) {
      this.y += this.dy;
      this.r += this.dr;
      this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
      this.obj.setAttribute("rotation", { x: 0, y: this.r, z: 0 });
    }
  }
}
