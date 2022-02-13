//1. This code is based on the example from the RiTa library, Kafgenstein (original code link: https://rednoise.org/rita/examples/p5/Kafgenstein/index.html#source)

//2. Huge shoutouts to a Github user "amephraim." The original text files are from the user's nlp archive (https://github.com/amephraim/nlp/tree/master/texts) The files here are formatted and extracted from them. Thanks!

let lines, markov, source1, source2, x = 160, y = 240;

function preload() {
  source1 = loadStrings('hP1-1.txt');
  source2 = loadStrings('hP3-2.txt');
}

function setup() {

  //it is okay to have a smaller background; the text will be in control panel to copy
  createCanvas(500, 500);
  textFont('Georgia', 10);
  textLeading(20);
  textAlign(LEFT);

  lines = ["High Potter"];

  // create a markov model w' n=2
  markov = RiTa.markov(2);

  // load text into the model
  markov.addText(source1.join(' '));
  markov.addText(source2.join(' '));

  drawText();
}

function drawText() {
  background(255);
  fill(0);
  text(lines.join(' '), x, y, 420, 420);
}

function mouseClicked() {
  
  //number of lines to create; if bumping up the number too high, it hardly processes; under 50 is recommended
  lines = markov.generate(50);
  x = y = 40;
  drawText();
  
  text('--- SAMPLE TEXT --- (Full version in the console)', 40, 480);
  
  //print out the text into the console in strings
  console.log(lines);
}
