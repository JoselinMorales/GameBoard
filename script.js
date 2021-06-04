

let canvas; 
let ctx; 
let gameLoop; 


function drawGameCanvas() {

  
  canvas = document.getElementById("gameBoard");


  if (canvas.getContext) {
   
    ctx = canvas.getContext("2d");
  }
}

drawGameCanvas();

const boardX = 300; 
const boardY = 300; 
const paddleH = 10; 
const paddleD = boardY - paddleH; 
const paddleW = 150; 

let paddleX = 150; 
let ballX = 150; 
let ballY = 150; 
let ballDX = 2; 
let ballDY = 4;


function draw() {


  ctx.clearRect(0, 0, boardX, boardY);


  ctx.fillStyle = "thistle";
  ctx.beginPath();
  ctx.rect(0, 0, boardX, boardY);
  ctx.closePath();
  ctx.fill();

 
  ctx.fillStyle = "tomato";
  ctx.beginPath();
  ctx.arc(ballX, ballY, 15, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();


  ctx.fillStyle = "navy";
  ctx.beginPath();
  ctx.rect(paddleX, paddleD, paddleW, paddleH);
  ctx.closePath();
  ctx.fill();


  ballX += ballDX;
  ballY += ballDY;

  if (ballX + ballDX > boardX - 15 || ballX + ballDX < 15)
    ballDX = -ballDX;

  
  if (ballY + ballDY < 15) ballDY = -ballDY;
 
  else if (ballY + ballDY > boardY - 15) {
  
    if (ballX > paddleX && ballX < paddleX + paddleW) 
      ballDY = -ballDY;
    
    else {
      clearInterval(gameLoop);
      alert("Game over!");
    }
  }
}

 
  gameLoop = setInterval(draw, 16);



function whatKey(evt) {

  switch (evt.keyCode) {
 
  case 37:
    paddleX = paddleX - 20;
    if (paddleX < 0) paddleX = 0;
    break;

  
  case 39:
    paddleX = paddleX + 20;
    if (paddleX > boardX - paddleW) paddleX = boardX - paddleW;
    break;
  }
}

  
  window.addEventListener('keydown', whatKey, true);