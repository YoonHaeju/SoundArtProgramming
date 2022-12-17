
// 오실레이터
// 0=도 // 1=레 // 2=미 // 3=파 // 4=솔 // 5=라 // 6=시
var wave = [7];

// 버튼
var button = [7];
var waveform_button;

var volume_size = 0;

var waveform = 'sine';


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
    waveform_button = createButton('wave');

    for (var i = 0; i < 7; i++) {
        wave[i] = new p5.Oscillator();
        wave[i].setType(waveform);
        wave[i].amp(volume_size);  // 일단 볼륨 다 0
    }

    wave[0].freq(261.6);
    wave[1].freq(293.6);
    wave[2].freq(329.6);
    wave[3].freq(349.2);
    wave[4].freq(391.9);
    wave[5].freq(440);
    wave[6].freq(493.8);

    for (var j = 0; j < 7; j++) {
        button[j].touchStarted(eval("Play" + str(j)));
        button[j].touchEnded(eval("Stop" + str(j)));
    }

    waveform_button.touchStarted(waveChange);
}


function draw() {   // 1초에 60프레임씩 무한 반복
    //background(255, 255, 255);

    for (var k = 0; k < 7; k++) {
        wave[k].setType(waveform);
        wave[k].amp(volume_size);  // 일단 볼륨 다 0
    }
}


function Stop0() {
    wave[0].stop();
}
function Stop1() {
    wave[1].stop();
}
function Stop2() {
    wave[2].stop();
}
function Stop3() {
    wave[3].stop();
}
function Stop4() {
    wave[4].stop();
}
function Stop5() {
    wave[5].stop();
}
function Stop6() {
    wave[6].stop();
}


function Play0() {
    wave[0].start();
}
function Play1() {
    wave[1].start();
}
function Play2() {
    wave[2].start();
}
function Play3() {
    wave[3].start();
}
function Play4() {
    wave[4].start();
}
function Play5() {
    wave[5].start();
}
function Play6() {
    wave[6].start();
}



function waveChange() {
    if (waveform == 'sine') {
        waveform = 'square';
    } else if (waveform == 'square') {
        waveform = 'triangle';
    } else if (waveform == 'triangle') {
        waveform = 'sawtooth';
    } else if (waveform == 'sawtooth') {
        waveform = 'sine';
    }
}






function deviceMoved() {   // 디바이스 앞뒤로 꺽으면 색, 볼륨 변경
    background(rotationX * 2, 200, 200);
    text(rotationX, 50, 50);

    // 일어나서 연주하는 것을 기본으로
    if (rotationX > -30 && rotationX <= 60) {
        volume_size = (rotationX + 30) / 90;
    } else if (rotationX > 60 && rotationX <= 180) {
        volume_size = 1;
    } else if (rotationX <= -30 && rotationX > -180) {
        volume_size = 0;
    }
}
