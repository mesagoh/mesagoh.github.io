
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(220);
  fullscreen();
  
  var hr = hour();
  var mn = minute();
  var sc = second();

  fill(0);
  textSize(60);
  text(hr + ":" + mn + ":" + sc, windowWidth/2, windowHeight/2);
}


