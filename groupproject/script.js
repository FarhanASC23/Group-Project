let myXPos = 300;
let myYPos = 300;
let mySize = 30;
// our player
let avoidXPos;
let avoidYPos;
let avoidSize;
// avoid the ball
let avoidSpeed = 2;
let avoidDirX = 1;
let avoidDirY = 1;
// characteristics 

let score = 0;
function setup() {  createCanvas(600, 600);
  stroke(255, 247, 255);
  coinSize = 20;
  coinXPos = random(0, 600);
  coinYPos = random(0, 600);
  coinSize = 20;
  avoidXPos = random(0, 600);
  avoidYPos = random(0, 600);
  avoidSize = 30; 
  }
// setup & locational status

function draw() 
{
  background(0, 0, 0, 100);

  fill(255, 247, 138);
  ellipse(coinXPos, coinYPos, coinSize, coinSize);

  fill(128, 229, 255);
  ellipse(myXPos, myYPos, mySize, mySize);

  if (keyIsDown(LEFT_ARROW)) {
    myXPos -= 2;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    myXPos += 2;
  }

  if (keyIsDown(UP_ARROW)) {
    myYPos -= 2;
  }

  if (keyIsDown(DOWN_ARROW)) {
    myYPos += 2;
  }
  // how to move around (up down left right)
  
  fill(255, 171, 234);
    
  ellipse(avoidXPos, avoidYPos, avoidSize, avoidSize);
   
    avoidXPos += avoidSpeed * avoidDirX;
    avoidYPos += avoidSpeed * avoidDirY;
    
  let distance = dist(myXPos, myYPos, coinXPos, coinYPos);
  if (distance <= (mySize / 2) + (coinSize / 2)) {   
    coinXPos = random(0, 600);
    coinYPos = random(0, 600); 
    avoidSpeed++;
    score += 1;
  }
  // randomized speed and addition to score IF coins collected

  let secdistance = dist(myXPos, myYPos, avoidXPos, avoidYPos);
    
  if (secdistance <= (mySize / 2) + (avoidSize / 2)) 
  {   
    avoidXPos = random(0, 600);
    avoidYPos = random(0, 600);
    score = 0;
    avoidSpeed = 2; 
  }

  if (myYPos > 600)
  {
    myYPos -= 5;
  }
  if (myXPos > 600)
  {
    myXPos -= 5;
  }

  if (myYPos < 0)
  {
    myYPos += 5;
  }

  if (myXPos < 0)
  {
    myXPos += 5;
  }
  
  // boundaries for our player

  if (avoidXPos > 600){
    avoidDirX = -1;
  }
  if(avoidXPos < 0){
    avoidDirX = 1;
  }
  if (avoidYPos > 600){
    avoidDirY = -1;
  }
  if (avoidYPos < 0){
    avoidDirY = 1;
  }
  
  // boundaries for our opponent

var i = 0; 
  if (i < 1) {
    fill(random(0,255), random(0,255), random(0,255));
    textSize(28);
    text("Points: " + score, 10, 30);
  }
// text of points (adds and resets)
  
}