let sprite0, sprite1, sprite2, sprite3;

function setup() {
  new Canvas(windowWidth, windowHeight);
  let hh = height / 2;
  let hw = width / 2;

  sprite0 = new Sprite(hw - hh, hh, 50, 50);
  sprite0.color = 0;
  sprite0.velocity.x = 3;

  sprite1 = new Sprite(hw + hh, hh, 50, 50);
  sprite1.color = 220;
  sprite1.velocity.x = -3.1;

  sprite2 = new Sprite(hw, 0, 50, 50);
  sprite2.color = color(220, 20, 120);
  sprite2.velocity.y = 3.1;

  sprite3 = new Sprite(hw, height, 50, 50);
  sprite3.color = 255;
  sprite3.velocity.y = -3;
}

function draw() {
  background("lightblue");
}
