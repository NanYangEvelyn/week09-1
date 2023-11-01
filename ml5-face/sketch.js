let video;
let predictions = [];
let facemesh;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // create capture
  video = createCapture(VIDEO);
  video.hide();

  // initialize model
  facemesh = ml5.facemesh(video);

  // add detection callback
  facemesh.on("face", (results) => {
    predictions = results;
  });
}

function drawBoundingBox(bbox) {
  let x = bbox.topLeft[0][0];
  let y = bbox.topLeft[0][1];
  let w = bbox.bottomRight[0][0] - x;
  let h = bbox.bottomRight[0][1] - y;

  push();
  strokeWeight(4);
  stroke(0, 200, 0);
  noFill();
  rect(x, y, w, h);
  pop();
}

function draw() {
  background(0);
  image(video, 0, 0);

  // if detected, draw mesh and bounding box
  for (let pi = 0; pi < predictions.length; pi++) {
    let mesh = predictions[pi].scaledMesh;
    for (let mi = 0; mi < mesh.length; mi++) {
      let vPos = mesh[mi];
      ellipse(vPos[0], vPos[1], 4, 4);
    }
    drawBoundingBox(predictions[pi].boundingBox);
  }
}
