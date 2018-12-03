
var i, healthcare1, greeting, button2, greeting2, button3, greeting3;

let answers = [];

let dems;
let ind;
let cons;


  function setup() {

    // create canvas
    createCanvas(1000, 700);


    healthcare1 = createButton('To expand access to health insurance, protect patients against arbitrary actions by insurance companies, and reduce costs.');
    healthcare1.position(60, 150);
    healthcare1.size(225,225);
    healthcare1.mousePressed(greet);

    greeting = createElement('h2', 'What is your decision Mr.President?');
    greeting.position(20, 5);

    textAlign(CENTER);
    textSize(50);

    healthcare2 = createButton('Create healthcare subsidies for american people based on their income,without mandatating certain healthcare providers with whom these subsidies can be used, to help everyone chose the exact care they want');
    healthcare2.position(400,150);
    healthcare2.size(225,225)
    healthcare2.mousePressed(greet2);

        healthcare3 = createButton('A patient-centered health care system, which is based in free markets, fostering competition and driving health care costs down.');
        healthcare3.position(760,150);
        healthcare3.size(225,225);
        healthcare3.mousePressed(greet3);

        BirthControl1 = createButton('Commit to protecting and advancing reproductive health, rights, and justice. Every woman should have access to quality reproductive health care services, including safe and legal abortion—regardless of where she lives, how much money she makes, or how she is insured.');
        BirthControl1.position(60,150);
        BirthControl1.size(225,225);
        BirthControl1.mousePressed(choice1);
        BirthControl1.hide()

        BirthControl2 = createButton('Larger focus on sexual education rather then changing current laws on abortion as changing the availibility of abortions does nothing to decrease the number of unplanned pregnancies or sexually trasmitted diseases.');
        BirthControl2.position(400,150);
        BirthControl2.size(225,225);
        BirthControl2.mousePressed(choice2);
        BirthControl2.hide()


        BirthControl3 = createButton('Pass legislation to defund Planned Parenthood. The half a million dollars provided to Planned Parenthood through the federal government will be cut. We will object to abortions, and the possibility that these federal funds are going towards what our party considers to be murder.');
        BirthControl3.position(760,150);
        BirthControl3.size(225,225);
        BirthControl3.mousePressed(choice3);
        BirthControl3.hide()

        Guns1 = createButton('We will subject the right to own firearms to reasonable regulation. We will focus on effective enforcement of existing laws, especially strengthening our background check system, and we will work together to enact commonsense improvements like reinstating the assault weapons ban and closing the gun show loophole, so that guns do not fall into the hands of those irresponsible, law-breaking few.')
        Guns1.position(60,150);
        Guns1.size(225,225);
        Guns1.mousePressed(exec1);
        Guns1.hide()

        Guns2 = createButton('Improved mental health reporting must be a matter of federal law, because current state laws on guns vary widely and have limited effectiveness.')
        Guns2.position(400,150);
        Guns2.size(225,225);
        Guns2.mousePressed(exec2);
        Guns2.hide()

        Guns3 = createButton('We will uphold the right of individuals to keep and bear arms. We will acknowledge, support, and defend the law-abiding citizens God given right of self-defense. We will call for the protection of such fundamental individual rights, and we recognize the individual responsibility to safely use and store firearms. This also includes the right to obtain and store ammunition without registration, the right to self-defense wherever a law-abiding citizen has a legal right to be.')
        Guns3.position(760,150);
        Guns3.size(225,225);
        Guns3.mousePressed(exec3);
        Guns3.hide()

        Affirmative1 = createButton('')
        Affirmative1.position(60,150);
        Affirmative1.size(225,225);
        Affirmative1.mousePressed(action1);
        Affirmative1.hide()

        Affirmative2 = createButton('')
        Affirmative2.position(400,150);
        Affirmative2.size(225,225);
        Affirmative2.mousePressed(action2);
        Affirmative2.hide()

        Affirmative3 = createButton('')
        Affirmative3.position(760,150);
        Affirmative3.size(225,225);
        Affirmative3.mousePressed(action3);
        Affirmative3.hide()

        Gay1 = createButton('')
        Gay1.position(60,150);
        Gay1.size(225,225);
        Gay1.mousePressed(rights1);
        Gay1.hide()

        Gay2 = createButton('')
        Gay2.position(400,150);
        Gay2.size(225,225);
        Gay2.mousePressed(rights2);
        Gay2.hide()

        Gay3 = createButton('')
        Gay3.position(760,150);
        Gay3.size(225,225);
        Gay3.mousePressed(rights3);
        Gay3.hide()

        Voter1 = createButton('')
        Voter1.position(60,150);
        Voter1.size(225,225);
        Voter1.mousePressed(suppression1);
        Voter1.hide()

        Voter2 = createButton('')
        Voter2.position(400,150);
        Voter2.size(225,225);
        Voter2.mousePressed(suppression2);
        Voter2.hide()

        Voter3 = createButton('')
        Voter3.position(760,150);
        Voter3.size(225,225);
        Voter3.mousePressed(suppression3);
        Voter3.hide()

    textAlign(CENTER);
    textSize(50);
  }

 function calculate(){
    for (let i = 0; i < answers.length;i++){
     if(answers[i]=="Democrat"){
        dems=dems+1;
     print(dems);
     }
  }
}
  function greet() {
    // var orders = input.value();
    greeting.html('Excellent Choice!');
    // input.value('');
    answers.push("Democrat");
    print(answers);
    healthcare1.hide();
    healthcare2.hide()
    healthcare3.hide()
    BirthControl1.show()
    BirthControl2.show()
    BirthControl3.show()
}
    function greet2() {
      //var orders = input.value();
      greeting.html('Excellent Choice!');
      //input.value('');
      answers.push("Independent");
      print(answers);
      healthcare3.hide()
      healthcare2.hide()
      healthcare1.hide()
      BirthControl1.show()
      BirthControl2.show()
      BirthControl3.show()
}
        function greet3() {
          //var orders = input.value();
          greeting.html('Excellent Choice!');
          //input.value('');
          answers.push("Conservative");
          print(answers);
          healthcare3.hide()
          healthcare2.hide()
          healthcare1.hide()
          BirthControl1.show()
          BirthControl2.show()
          BirthControl3.show()
}
          function choice1() {
            greeting.html('Excellent Choice!')
            answers.push("Democrat");
            print(answers);
            BirthControl1.hide()
            BirthControl2.hide()
            BirthControl3.hide()
            Guns1.show()
            Guns2.show()
            Guns3.show()
}
          function choice2() {
            greeting.html('Excellent Choice!')
            answers.push("Independent");
            print(answers);
            BirthControl1.hide()
            BirthControl2.hide()
            BirthControl3.hide()
            Guns1.show()
            Guns2.show()
            Guns3.show()
          }

function choice3() {
  greeting.html('Excellent Choice!')
  answers.push("Conservative");
  print(answers);
  BirthControl1.hide()
  BirthControl2.hide()
  BirthControl3.hide()
  Guns1.show()
  Guns2.show()
  Guns3.show()
}

function exec1() {
  greeting.html('Excellent Choice!')
  answers.push("Democrat");
  print(answers);
  Guns1.hide()
  Guns2.hide()
  Guns3.hide()
  Affirmative1.show()
  Affirmative2.show()
  Affirmative3.show()
}
function exec2() {
  greeting.html('Excellent Choice!')
  answers.push("Independent");
  print(answers);
  Guns1.hide()
  Guns2.hide()
  Guns3.hide()
  Affirmative1.show()
  Affirmative2.show()
  Affirmative3.show()
}
function exec3() {
  greeting.html('Excellent Choice!')
  answers.push("Conservative");
  print(answers);
  Guns1.hide()
  Guns2.hide()
  Guns3.hide()
  Affirmative1.show()
  Affirmative2.show()
  Affirmative3.show()
}
function action1() {
  greeting.html('Excellent Choice!')
  answers.push("Democrat");
  print(answers);
  Affirmative1.hide()
  Affirmative2.hide()
  Affirmative3.hide()
  Gay1.show()
  Gay2.show()
  Gay3.show()
}
function action2() {
  greeting.html('Excellent Choice!')
  answers.push("Independent");
  print(answers);
  Affirmative1.hide()
  Affirmative2.hide()
  Affirmative3.hide()
  Gay1.show()
  Gay2.show()
  Gay3.show()
}
function action3() {
  greeting.html('Excellent Choice!')
  answers.push("Conservative");
  print(answers);
  Affirmative1.hide()
  Affirmative2.hide()
  Affirmative3.hide()
  Gay1.show()
  Gay2.show()
  Gay3.show()
}
function rights1() {
  greeting.html('Excellent Choice!')
  answers.push("Conservative");
  print(answers);
  Gay1.hide()
  Gay2.hide()
  Gay3.hide()
  Voter1.show()
  Voter2.show()
  Voter3.show()
}
function rights2() {
  greeting.html('Excellent Choice!')
  answers.push("Conservative");
  print(answers);
  Gay1.hide()
  Gay2.hide()
  Gay3.hide()
  Voter1.show()
  Voter2.show()
  Voter3.show()

}
function rights3() {
  greeting.html('Excellent Choice!')
  answers.push("Conservative");
  print(answers);
  Gay1.hide()
  Gay2.hide()
  Gay3.hide()
  Voter1.show()
  Voter2.show()
  Voter3.show()
}
function suppression1() {
  greeting.html('Excellent Choice!')
  answers.push("Conservative");
  print(answers);
  Voter1.hide()
  Voter2.hide()
  Voter3.hide()
}
function suppression2() {
  greeting.html('Excellent Choice!')
  answers.push("Conservative");
  print(answers);
  Voter1.hide()
  Voter2.hide()
  Voter3.hide()
}
function suppression3() {
  greeting.html('Excellent Choice!')
  answers.push("Conservative");
  print(answers);
  Voter1.hide()
  Voter2.hide()
  Voter3.hide()
  console.log(calculate)
}




function draw() {

  background(255);

// Draw and shade the flag pole
var poleWidth = 40;
fill(200);
rect(0, 0, poleWidth, height);
for (var poleShade = 0; poleShade < poleWidth; poleShade ++) {
  stroke(poleShade / (poleWidth * 2) * 700, 150);
  line(poleShade, 0, poleShade, height);
}

// Set the flag size
var flagWidth = 1000;
var flagHeight = 650;

// Draw the red stripes
var stripeHeight = 50;
fill(178, 34, 52);
noStroke();
for (var stripes = 0; stripes < flagHeight; stripes += stripeHeight * 2) {
  rect(poleWidth, stripes, flagWidth, stripeHeight);
}

// Draw the blue box
fill(60, 59, 110);
rect(poleWidth, 0, 420, stripeHeight * 7);

// Draw the first row of white stars
fill(255);
for (var starRow1V = 17.5; starRow1V <= 315; starRow1V += 70) {
  for (var starRow1X = 75, starRow1Y = starRow1V; starRow1X <= 425; starRow1X += 70) {
    beginShape();
    vertex(starRow1X, starRow1Y);
    vertex(starRow1X + 11.5, starRow1Y + 35);
    vertex(starRow1X - 19, starRow1Y + 13);
    vertex(starRow1X + 19, starRow1Y + 13);
    vertex(starRow1X - 11.5, starRow1Y + 35);
    vertex(starRow1X, starRow1Y);
    endShape();
  }
}

// Draw the second row of white stars
for (var starRow2V = 17.5; starRow2V <= 280; starRow2V += 70) {
  for (var starRow2X = 110, starRow2Y = starRow2V + 35; starRow2X <= 425; starRow2X += 70) {
    beginShape();
    vertex(starRow2X, starRow2Y);
    vertex(starRow2X + 11.5, starRow2Y + 35);
    vertex(starRow2X - 19, starRow2Y + 13);
    vertex(starRow2X + 19, starRow2Y + 13);
    vertex(starRow2X - 11.5, starRow2Y + 35);
    vertex(starRow2X, starRow2Y);
    endShape();
  }
}

// Shade the flag in three transparent gradients
for (var gradient1 = 40; gradient1 < 373; gradient1 ++) {
  stroke(gradient1 / flagWidth * 3 * 255, 50);
  line(gradient1, 0, gradient1, flagHeight);
}
for (var gradient2A = 373, gradient2B = 255; gradient2A < 706; gradient2A ++, gradient2B --) {
  stroke(gradient2B, 50);
  line(gradient2A, 0, gradient2A, flagHeight);
}
for (var gradient3A = 706, gradient3B = 0; gradient3A < width; gradient3A ++, gradient3B ++) {
  stroke(gradient3B / flagWidth * 3 * 255, 50);
  line(gradient3A, 0, gradient3A, flagHeight);
}

}
