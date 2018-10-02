
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);
  
  var hr = hour();
  var mn = minute();
  var sc = second();

  stroke(255,145,220);
  strokeWeight(3);
  //banana cream - fill(255,210,180)
  fill(255,210,220);
  textStyle(BOLD);
  textSize(80);
  textAlign(CENTER,CENTER);
  text(hr + ":" + mn + ":" + sc, width/2, height*0.75);
}


