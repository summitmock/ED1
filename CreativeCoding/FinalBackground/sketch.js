let gif;

function preload (){
gif = loadImage ('assets/FinalGIF.gif');

}


function setup() {// runs one time
  createCanvas(windowWidth, windowHeight);
    background('#fffec8');
  strokeWeight(1);
  fill('#fffd8d')
}

function draw() {//runs in a loop
  
  var num = 10;
  var sideLen = windowWidth/num;
  for (var y = 0; y < windowHeight; y = y + sideLen) {//loop to create a grid in the y direction
    for (var x = 0; x < windowWidth; x = x + sideLen) {
      quad (x,y,x + sideLen, y, x +sideLen, y + sideLen,x, y + sideLen);
      
       }
  }
}
      
  function windowResized(){
    resizeCanvas (windowWidth,windowHeight);
  

      
 
  
  }
