let video;
let predictions = [];
let handpose;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // create capture
  video = createCapture(VIDEO);
  video.hide();

  // initialize model
  handpose = ml5.handpose(video);

  // add detection callback
  handpose.on("hand", (results) => {
    predictions = results;
  });
}

function draw() {
  background(0);
  image(video, 0, 0);

  // if hand detected, draw landmarks
  for (let pi = 0; pi < predictions.length; pi++) {
    let landmarks = predictions[pi].landmarks;
    for (let li = 0; li < landmarks.length; li++) {
      let lpos = landmarks[li];
      ellipse(lpos[0], lpos[1], 8, 8);
    }
  }
}
