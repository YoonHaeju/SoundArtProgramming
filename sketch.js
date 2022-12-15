// 오실레이터
// 0=도 // 1=레 // 2=미 // 3=파 // 4=솔 // 5=라 // 6=시
var wave = [7];


// 버튼
var button = [7];

function setup() {  // 화면 세팅공간 (실행시 처음에 한번 실행)
  createCanvas(300, 200);

  background(255, 255, 255);
  
  button[0] = createButton('C');
  button[1] = createButton('D');
  button[2] = createButton('E');
  button[3] = createButton('F');
  button[4] = createButton('G');
  button[5] = createButton('A');
  button[6] = createButton('B');
  
  for(var i=0; i<7; i++){
    wave[i] = new p5.Oscillator();
    wave[i].setType('sine');
    wave[i].amp(0);  // 일단 볼륨 다 0
  }
  for(var j=0; j<7; j++){
    button[j].touchStarted(eval("Play"+str(j)));
    button[j].touchEnded(eval("Stop"+str(j)));
  }
  
  /*
  button[0].touchStarted(Play0);
  button[0].touchEnded(Stop0);
  button[1].touchStarted(Play1);
  button[1].touchEnded(Stop1);
  button[2].touchStarted(Play2);
  button[2].touchEnded(Stop2);
  button[3].touchStarted(Play3);
  button[3].touchEnded(Stop3);
  button[4].touchStarted(Play4);
  button[4].touchEnded(Stop4);
  button[5].touchStarted(Play5);
  button[5].touchEnded(Stop5);
  button[6].touchStarted(Play6);
  button[6].touchEnded(Stop6);
  */
}


function draw() {   // 1초에 60프레임씩 무한 반복
  //background(255, 255, 255);

  
}

function Stop0(){
  wave[0].amp(0 ,1);
}
function Play0(){
  wave[0].freq(261.6);
  wave[0].amp(1, 1);
  wave[0].start();
}
function Stop1(){
  wave[1].amp(0, 1);
}
function Play1(){
  wave[1].freq(293.6);
  wave[1].amp(1, 1);
  wave[1].start();
}
function Stop2(){
  wave[2].amp(0, 1);
}
function Play2(){
  wave[2].freq(329.6);
  wave[2].amp(1, 1);
  wave[2].start();
}
function Stop3(){
  wave[3].amp(0, 1);
}
function Play3(){
  wave[3].freq(349.2);
  wave[3].amp(1, 1);
  wave[3].start();
}
function Stop4(){
  wave[4].amp(0, 1);
}
function Play4(){
  wave[4].freq(391.9);
  wave[4].amp(1, 1);
  wave[4].start();
}
function Stop5(){
  wave[5].amp(0, 1);
}
function Play5(){
  wave[5].freq(440);
  wave[5].amp(1, 1);
  wave[5].start();
}
function Stop6(){
  wave[6].amp(0, 1);
}
function Play6(){
  wave[6].freq(493.8);
  wave[6].amp(1, 1);
  wave[6].start();
}

/*
function deviceMoved(){   // 디바이스 앞뒤로 꺽으면 색 변경
  background(rotationX*2, 200, 200);
  text(rotationX, 50, 50);
}
