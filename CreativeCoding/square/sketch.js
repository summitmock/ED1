function setup() {
  createCanvas(720, 720);
    background('#fffec8');
  strokeWeight(8);
  fill('#fffd8d')
}

function draw() {
  
  translate(60,60);//creates a new origin point 
  
quad(
  0,0,
  300,0,
  300,300,
  0,300
);
}