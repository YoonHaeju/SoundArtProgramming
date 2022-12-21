
//  오실레이터
// 0=도 //1=도# // 2=레 // 3=레# // 4=미 // 5=파 // 6=파# // 7=솔 // 8=솔# // 9=라 // 10=라# // 11=시
var wave = [13];

// 버튼
var button = [13];
var waveform_button = [4];

var volume_size = 0;

var waveform = 'sine';

// 파형분석
let fft;

// style
let pianoDiv;
let volTextDiv;
let waveDiv;
var volText;

function setup() {  // 화면 세팅공간 (실행시 처음에 한번 실행)
    createCanvas(displayWidth, displayHeight * 0.9);
    //createCanvas(900, 500);
    background(200, 200, 200);

    pianoDiv = createDiv('',
        button[0] = createButton(''),
        button[1] = createButton(''),
        button[2] = createButton(''),
        button[3] = createButton(''),
        button[4] = createButton(''),
        button[5] = createButton(''),
        button[6] = createButton(''),
        button[7] = createButton(''),
        button[8] = createButton(''),
        button[9] = createButton(''),
        button[10] = createButton(''),
        button[11] = createButton(''),
        button[12] = createButton('')
        
    );
    Piano_style();

    volTextDiv = createDiv('');
    DivText_style();

    waveDiv = createDiv('',
        waveform_button[0] = createButton('sine'),
        waveform_button[1] = createButton('square'),
        waveform_button[2] = createButton('triangle'),
        waveform_button[3] = createButton('sawtooth')
    );
    waveDiv_style();
    for (var j = 0; j < 4; j++) {
        waveform_button[j].touchStarted(eval("waveChange" + str(j)));
    }


    for (var i = 0; i < 13; i++) {
        wave[i] = new p5.Oscillator();
        wave[i].setType(waveform);
        wave[i].amp(volume_size);  // 일단 볼륨 다 0
    }

    wave[0].freq(261.6256);
    wave[1].freq(277.1826);
    wave[2].freq(293.6648);
    wave[3].freq(311.1270);
    wave[4].freq(329.7276);
    wave[5].freq(349.2282);
    wave[6].freq(369.9944);
    wave[7].freq(391.9954);
    wave[8].freq(415.3047);
    wave[9].freq(440);
    wave[10].freq(466.1638);
    wave[11].freq(493.8833);
    wave[12].freq(523.2511);

    for (var j = 0; j < 13; j++) {
        button[j].touchStarted(eval("Play" + str(j)));
        button[j].touchEnded(eval("Stop" + str(j)));
    }

    fft = new p5.FFT();
}


function draw() {   // 1초에 60프레임씩 무한 반복
    background(0, 0, 0);

    // 사운드
    for (var k = 0; k < 13; k++) {
        wave[k].setType(waveform);
        wave[k].amp(volume_size);  // 일단 볼륨 다 0
    }

    // 텍스트
    strokeWeight(0);
    fill('white');
    textAlign(CENTER, CENTER);
    textSize(height / 26);
    text(volume_size.toFixed(4) * 100, width / 16 * 3, height / 20);
    text(waveform, width / 16 * 3, height / 20 * 3);

    // 파형  
    noFill();
    let draw_waveform = fft.waveform();
    beginShape();
    stroke('white');
    strokeWeight(5);
    for (let i = 0; i < draw_waveform.length; i++) {
        let x = map(i, 0, draw_waveform.length, 0, width);
        let y = map(draw_waveform[i], -1, 1, height / 10 * 8, height);
        vertex(x, y);
    }
    endShape();
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
function Stop7() {
    wave[7].stop();
}
function Stop8() {
    wave[8].stop();
}
function Stop9() {
    wave[9].stop();
}
function Stop10() {
    wave[10].stop();
}
function Stop11() {
    wave[11].stop();
}
function Stop12() {
    wave[12].stop();
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
function Play7() {
    wave[7].start();
}
function Play8() {
    wave[8].start();
}
function Play9() {
    wave[9].start();
}
function Play10() {
    wave[10].start();
}
function Play11() {
    wave[11].start();
}
function Play12() {
    wave[12].start();
}



function waveChange0() {
    waveform = 'sine';
}

function waveChange1() {
    waveform = 'square';
}

function waveChange2() {
    waveform = 'triangle';
}

function waveChange3() {
    waveform = 'sawtooth';
}


function Piano_style() {
    pianoDiv.position(width / 8 * 3, 0);
    pianoDiv.size(width / 8 * 5, height / 10 * 8);
    let pianoDiv_col = color(255, 255, 255, 255);
    pianoDiv.style('background-color', pianoDiv_col);

    let button_col1 = color(255, 255, 255, 255);
    let button_col2 = color(100, 100, 100, 2555);

    var count1 = 0;
    for (var j = 0; j < 13; j++) {
        if (j == 0 || j == 2 || j == 4 || j == 5 || j == 7 || j == 9 || j == 11 || j == 12) {
            button[j].position(pianoDiv.width / 8 * count1, 0);
            button[j].size(pianoDiv.width / 8, pianoDiv.height);
            button[j].style('font-size', '30px');
            button[j].style('text-align', 'center');
            button[j].style('background-color', button_col1);
            count1++;
            button[j].parent(pianoDiv)
        }
    }
    var count2 = 0;
    for (var i = 0; i <13; i++) {
        if (i == 1 || i == 3 || i == 6 || i == 8 || i == 10) {
            button[i].position(pianoDiv.width / 8 * (count2) + pianoDiv.width / 16, 0);
            button[i].size(pianoDiv.width / 8, pianoDiv.height / 5 * 3);
            button[i].style('font-size', '30px');
            button[i].style('text-align', 'center');
            button[i].style('background-color', button_col2);
            if (i == 3) count2++;
            count2++;
            button[i].parent(pianoDiv);
        }
    }
}

function DivText_style() {
    volTextDiv.position(0, 0);
    volTextDiv.size(width / 8 * 3, height / 10 * 2);
    let TextDiv_col = color(50, 150, 255, 10);
    volTextDiv.style('background-color', TextDiv_col);
}

function waveDiv_style() {
    waveDiv.position(0, height / 10 * 2);
    waveDiv.size(width / 8 * 3, height / 10 * 6);
    let waveDiv_col = color(0, 0, 0, 255);
    waveDiv.style('background-color', waveDiv_col);

    waveform_button[0].position(waveDiv.width / 8, waveDiv.height / 21);
    waveform_button[1].position(waveDiv.width / 8, waveDiv.height / 21 * 6);
    waveform_button[2].position(waveDiv.width / 8, waveDiv.height / 21 * 11);
    waveform_button[3].position(waveDiv.width / 8, waveDiv.height / 21 * 16);
    for (var i = 0; i < 4; i++) {
        waveform_button[i].size(waveDiv.width / 8 * 6, pianoDiv.height / 20 * 3);
        let wavebtn_col = color(50, 35, 130, 150);
        waveform_button[i].style('background-color', wavebtn_col);
        waveform_button[i].style('font-size', '20px');
        waveform_button[i].style('text-align', 'center');
        waveform_button[i].style('color', 'white');
        waveform_button[i].parent(waveDiv);
    }
}


function deviceMoved() {   // 디바이스 앞뒤로 꺽으면 색, 볼륨 변경
    //background(rotationX * 2, 200, 200);
    //text(rotationY, 50, 50);

    // 일어나서 연주하는 것을 기본으로
    if (rotationY > -30 && rotationY <= 60) {
        volume_size = (rotationY + 30) / 90;
    } else if (rotationY > 60 && rotationY <= 180) {
        volume_size = 1;
    } else if (rotationY <= -30 && rotationY > -180) {
        volume_size = 0;
    }
}
