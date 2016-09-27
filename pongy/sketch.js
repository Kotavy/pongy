// mouseX and mouseY are special in that they follow the mouse ONLY to the canvas bounds.
var x = 50;
var y = 50;
var xspeed = -3;
var yspeed = 4;

function setup() {
  createCanvas(640, 360);
  c = color(255,255,255);
}

function draw() { //loop
  background(225);
  rect(80,(mouseY - 20),20,40); // rect(x,y,l,h); draws from corner.
  fill(c);
  ellipse(x,y,60,60); // (x,y,l,h); draws from center.
  
  y = y + yspeed;
  x = x + xspeed;
  
  if (xspeed < 0) {
    if ((x <= 100) && ((y > mouseY - 5) && (y > mouseY + 5))) {
      xspeed = -(xspeed);
    }
  }
  
  //((ellipse(y) - 100 >= mouseY) && (ellipse(y) + 100 <= mouseY))
  
  if (y >= height - 25) {
    yspeed = (yspeed * -1);
  }
  
  if (y <= 0 + 25) {
    yspeed = (yspeed * -1);
  }
  
  if (x >= width - 25) {
    xspeed = -(xspeed + 2);
    //c = color(random(255),random(255),random(255));
  }
  
  if (x <= 0 + 25) {
    xspeed = -(xspeed);
    //c = color(random(255),random(255),random(255));
  }
  
  text("X coordinate is: " + mouseX,20,20);
}