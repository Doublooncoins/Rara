//The setup function only happens once
var rickyroller=0; 

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(173,216,mouseX); //an RGB color for the canvas' background
  //circle
  strokeWeight(7);
  stroke(255,255,255); // an RGB color for the circle's border
  fill(112,173,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(64,466,mouseX,mouseX); // center of canvas, 20px dia
 fill(253,255,91);
 ellipse(450,0,mouseX,mouseX);
fill(237,63,79);
 ellipse(60,0,mouseX,mouseX);
fill(57,245,105);
 ellipse(430,490,mouseX,mouseX);
fill(255,255,255);
 ellipse(250,250,rickyroller,rickyroller);
fill(0,0,0);
 ellipse(random(width),random(height),10,10);
textFont("Garamond");
textSize(80);
text('gold', 175,80);
strokeWeight(0);
ellipse(mouseX,mouseY,100,mouseX)
}

function mousePressed(){
if(rickyroller>=255){
  rickyroller=0;
}else{
  rickyroller=rickyroller+15;
}



}
