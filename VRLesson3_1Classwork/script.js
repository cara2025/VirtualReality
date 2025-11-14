window.addEventListener("DOMContentLoaded",function() {
  let myBox = document.querySelector("#myBox");
  //Task 3: Create a variable for the cylinder.  Get the element from the HTML
  let myCylinder = document.getElementById("cylinder");
    myCylinder.setAttribute("color", "white");
    myCylinder.addEventListener("click", function(){
      myCylinder.setAttribute("opacity", 0);

    })


  myBox.addEventListener("mouseenter",function(){
    this.setAttribute("height",2);
    if(height){
      myBox.setAttribute("height", 2);
      height = false;
    }
    else{
      myBox.setAttribute("height", 1);
      height = true;
    }
  })
  //Task 4: Add another event to set the height of myBox back to 1 when the mouse is no longer on myBox

  //Task 5: Make  the the cylinder disappear when you click on it.  Set opacity to zero
})
