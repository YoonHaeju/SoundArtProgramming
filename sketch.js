
// 오실레이터
// 0=도 // 1=레 // 2=미 // 3=파 // 4=솔 // 5=라 // 6=시
var wave = [7];

// 버튼
var button = [7];

// play state
var state = [7];
var volume = 0;


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
    state[i] = false;
  }
  for(var j=0; j<7; j++){
    button[j].touchStarted(eval("Play"+str(j)));
    button[j].touchEnded(eval("Stop"+str(j)));
  }
}


function draw() {   // 1초에 60프레임씩 무한 반복
  background(255, 255, 255);

  
}

function Stop0(){
  wave[0].amp(0 ,1);
  state[0] = false;
}
function Stop1(){
  wave[1].amp(0, 1);
  state[1] = false;
}
function Stop2(){
  wave[2].amp(0, 1);
  state[2] = false;
}
function Stop3(){
  wave[3].amp(0, 1);
  state[3] = false;
}
function Stop4(){
  wave[4].amp(0, 1);
  state[4] = false;
}
function Stop5(){
  wave[5].amp(0, 1);
  state[5] = false;
}
function Stop6(){
  wave[6].amp(0, 1);
  state[6] = false;
}



function Play0(){
  //state[0] = true;
  wave[0].freq(261.6);
  wave[0].amp(volume, 1);
  wave[0].start();
}
function Play1(){
  //state[1] = true;
  wave[1].freq(293.6);
  wave[1].amp(volume, 1);
  wave[1].start();
}
function Play2(){
  //state[2] = true;
  wave[2].freq(329.6);
  wave[2].amp(volume, 1);
  wave[2].start();
}
function Play3(){
  //state[3] = true;
  wave[3].freq(349.2);
  wave[3].amp(volume, 1);
  wave[3].start();
}
function Play4(){
  //state[4] = true;
  wave[4].freq(391.9);
  wave[4].amp(volume, 1);
  wave[4].start();
}
function Play5(){
  //state[5] = true;
  wave[5].freq(440);
  wave[5].amp(volume, 1);
  wave[5].start();
}
function Play6(){
  //state[6] = true;
  wave[6].freq(493.8);
  wave[6].amp(volume, 1);
  wave[6].start();
}

function deviceMoved(){   // 디바이스 앞뒤로 꺽으면 색 변경
  // 일어나서 연주하는 것을 기본으로
  text(rotationX, 50, 50);
  if(rotationX>-30 && rotationX<=60){
    volume = (rotationX+30)/90;
  }else if(rotationX>60 && rotationX <=180){
    volume = 1;
  }else if(rotationX<=-30&& rotationX>-180){
    volume = 0;
  }
}
