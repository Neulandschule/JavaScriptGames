const calculationDom = document.getElementById('calculation');
const correctDom =document.getElementById('correct');
const timerDom = document.getElementById('timer');
const answerInput = document.getElementById('answer');
const startBtn = document.getElementById('start_btn');

startBtn.addEventListener('click', start);


document.addEventListener('keypress', function(e) {
    if(e.key == 'Enter' && running) {
        answer();
    }
});


let n1;
let n2;
let correct;
let running = true;


end(true);


function start() {
    correct = 0;
    setRandomNumbers();
    running = true;
    printStat();
    timer(60);
    end(false);
    
}

function answer() {
    let answer = answerInput.value;
    if (answer == n1 * n2) {
        correct++;
        setRandomNumbers();
        printStat();
    }
    else {
        end(true);
    }
}

setRandomNumbers = () => {
    answerInput.value = '';
    n1 = getRandomNum(1, 9);
    n2 = getRandomNum(1, 9);
    printCalc();
}

getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


printCalc = () => {
    calculationDom.innerHTML = `${n1} * ${n2}`;
}


printStat = () => {
    correctDom.innerHTML = correct
}


function end(bool) {
    answerInput.disabled = bool;
    startBtn.disabled = !bool;
    running = !bool;

    if(bool) {
        startBtn.focus();
    }
    else {
        answerInput.focus();
    }
}

function timer(i) {
    timerDom.innerHTML = i;
    if (i > 0 && running) {
        i--;
        let timeout = window.setTimeout('timer('+i+')', 1000);
    }
    else {
        end(true);
    } 
}




    
