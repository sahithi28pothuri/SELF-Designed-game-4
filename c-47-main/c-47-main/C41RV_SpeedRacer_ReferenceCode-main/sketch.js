var canvas;
var database, gameState;
var form,game, player, playerCount;
var bgimg;
var score = 0


function preload() {
  bgimg=loadImage("assets/bgimage.jpeg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();

  game = new Game();
  game.getState()
  game.start();

}

function draw() {
  background(bgimg);

  if (playerCount === 1) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
