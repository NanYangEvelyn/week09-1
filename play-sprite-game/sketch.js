let player;
let others;

function createPlayer() {
  player = new Sprite(width / 2, height, 30, 30);
  player.color = color(255, 255, 0);
}

function resetOther(sprite) {
  sprite.position.x = -sprite.width;
  sprite.position.y = random(30, height - 30);
  sprite.velocity.x = random([1, 2, 3]);
}

function createOthers() {
  others = [];

  for (let c = 0; c < 32; c++) {
    let sy = random(height);
    let sw = random(width / 20, width / 8);
    let sx = random(-2 * sw, -sw);
    let sprite = new Sprite(sx, sy, sw, 30, "k");
    sprite.color = 0;
    sprite.velocity.x = random([1, 2, 3]);
    others.push(sprite);
  }
}

function setup() {
  new Canvas(windowWidth, windowHeight);
  createPlayer();
  createOthers();
}

function draw() {
  background(220, 20, 120);

  if (keyIsDown(LEFT_ARROW)) {
    player.move(2, "left", 5);
  }

  if (keyIsDown(RIGHT_ARROW)) {
    player.move(2, "right", 5);
  }

  if (keyIsDown(UP_ARROW)) {
    player.move(2, "up", 5);
  }

  if (keyIsDown(DOWN_ARROW)) {
    player.move(2, "down", 5);
  }

  for (let si = 0; si < others.length; si++) {
    let sprite = others[si];
    if (sprite.position.x > width + sprite.width) {
      resetOther(sprite);
    }
  }
}
