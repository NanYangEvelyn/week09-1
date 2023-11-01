let gridSize = 20;
let player;
let maze;

function createPlayer() {
  player = new Sprite(width / 2, height / 2, gridSize - 2);
  player.color = color(255, 255, 0);
}

function createMaze() {
  maze = [];
  let sx = width / 2;
  let sy = height / 2;

  for (let y = 0; y < height; y += gridSize) {
    for (let x = 0; x < width; x += gridSize) {
      if (random() < 0.3333) {
        let sprite = new Sprite(sx, sy, gridSize, gridSize, "k");
        sprite.offset.x = x - width / 2;
        sprite.offset.y = y - height / 2;
        sprite.color = 0;
        maze.push(sprite);
      }
    }
  }
}

function setup() {
  randomSeed(1010);
  new Canvas(windowHeight, windowHeight);
  world.gravity.y = 5;
  createMaze();
  createPlayer();
}

function draw() {
  background(220, 20, 120);
  if (keyIsDown(LEFT_ARROW)) {
    for (let i = 0; i < maze.length; i++) {
      maze[i].rotate(1, 3);
    }
  }

  if (keyIsDown(RIGHT_ARROW)) {
    for (let i = 0; i < maze.length; i++) {
      maze[i].rotate(-1, 3);
    }
  }

  if (player.x > width || player.x < 0 || player.y > height || player.y < 0) {
    for (let i = 0; i < maze.length; i++) {
      maze[i].remove();
    }
    maze = null;

    player.remove();
    player = null;
    createMaze();
    createPlayer();
  }
}
