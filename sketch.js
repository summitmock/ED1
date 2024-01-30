let gif;

function preload (){
gif = loadImage ('assets/summit.gif');

}


function setup() {// runs one time
  createCanvas(windowWidth, windowHeight);
    fill('#fffd8d');
    stroke ('white');
    strokeWeight(1);

}

function draw() {//runs in a loop
  background ('#fffec8');
  
  var num = 10;
  var sideLen = windowWidth/num;
  
  for (var y = 0; y < 2 * windowHeight; y = y + sideLen) {//loop to create a grid in the y direction
    for (var x = 0; x < 2 * windowWidth; x = x + sideLen) {
      
      
       }
  }
}
      
  function windowResized(){
    resizeCanvas (windowWidth,windowHeight);
  

      
 
  
  }
