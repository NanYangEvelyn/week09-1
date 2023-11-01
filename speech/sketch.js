let mSpeech;
let helloButton;
let listButton;

function sayHello() {
  mSpeech.speak("hello 60 63 D");
}

function readList() {
  mSpeech.speak("ok. here we go. this is gonna take a while");
  let voicesString = mSpeech.voices.map((v) => v.name).join(". ");
  mSpeech.speak(voicesString);
}

function areYouSure() {
  mSpeech.speak("are you sure? .... like... really, really, REALLY, sure?");
  let aysButton = createButton("ARE YOU SURE?");
  aysButton.position(50, 130);
  aysButton.mouseClicked(readList);
}

function listVoices() {
  mSpeech.speak("look in console for voice list");
  mSpeech.speak("or... if you prefer, I can read them to you...");
  let readButton = createButton("READ VOICE LIST");
  readButton.position(50, 80);
  readButton.mouseClicked(areYouSure);
  mSpeech.listVoices();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mSpeech = new p5.Speech();
  mSpeech.interupt = false;

  helloButton = createButton("SAY HELLO");
  helloButton.position(10, 10);
  helloButton.mouseClicked(sayHello);

  listButton = createButton("LIST VOICES");
  listButton.position(120, 10);
  listButton.mouseClicked(listVoices);
}

function draw() {}
