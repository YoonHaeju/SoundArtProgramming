
var button;
var button2;


var C_text = "";
var D_text = "";

function setup() {  // 화면 세팅공간 (실행시 처음에 한번 실행)
  //createCanvas(displayWidth, displayHeight);  // 각 휴대폰 화면의 크기에 맞춰서 보이도록
  createCanvas(720,256);

  background(255, 255, 255);
  button = createButton('C');
  
  button2 = createButton('D');
  

}


function draw() {   // 1초에 60프레임씩 무한 반복
  background(255, 255, 255);
  
  text(C_text, 10, 10);
  text(D_text, 30, 30);
  
  button.touchStarted(PlayC);   // 버튼 눌리면 PlayC 함수 실행
  button.touchEnded(StopC);     // 버튼에서 손 떼지면 StopC 함수 실행
  
  button2.touchStarted(PlayD);
  button2.touchEnded(StopD);
  
  
}

function StopC(){
  C_text = ""
}
function PlayC(){
  C_text = "C"
}
function StopD(){
  D_text = ""
}
function PlayD(){
  D_text = "D"
}


/*
function deviceMoved(){   // 디바이스가 움직이면
  //ampValue = accelerationX/2;   //++
  ampValue = accelerationX*1000;  ////
  background(255, 255, 255);
  text(accelerationX/2, 50, 50);
}
*/


