function setup() {//runs one time
  createCanvas(720, 720);
    background('#fffec8');
  strokeWeight(8);
  fill('#fffd8d')
}

function draw() {//runs in a loop
  
  translate(60,60);//resets origin point
  
  for (var y = 0; y < 600; y = y +300) {//loop to create a grid in the y direction
  
  for (var x = 0; x < 600; x = x + 300) {
quad(
  x,y,
  x + 300,y,
  x + 300, y + 300,
  x,y + 300 
);// loop to create a row in the x direction 
 
  }
  }
}