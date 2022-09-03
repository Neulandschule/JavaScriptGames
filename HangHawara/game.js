const hang_img = document.getElementById('hang_img');
const word_board = document.getElementById('word_board');
const letter_select = document.getElementById('letter');
const footer_text = document.getElementById('footer_text');
const input_btn = document.getElementById('guess');
input_btn.addEventListener('click', guess);

let word;
let wordArr;
let fails = 0;

const words = [
    'HABARA', 'SERVUS', 'TOPFEN', 'ERDAPFEL', 'TSCHECHERL', 'GSPUSI', 'PARADEISER', 'BUSSI'
]


start();
function start() {
    word = words[Math.floor(Math.random() * words.length)];
    wordArr = new Array(word.length).fill('_');
    drawWord();
}

function drawWord() {
    word_board.innerHTML = '';
    for(v of wordArr) {
        word_board.innerHTML += v;
    }
}

function guess() {
    if (input_btn.value == 'NEUSTART') {
        reset();
        start();
    }
    else {
        let letter = letter_select.value
        if (word.includes(letter)) {
            editSelection(letter, true)
            for (let i = 0; i < word.length; i++) {
                if (word[i] == letter) {
                    wordArr[i] = letter;
                }
            }
            drawWord();
        }
        else {
            editSelection(letter, false);
            fails++;
            setImage();
        }
        checkGameStatus();
    }

}

function editSelection(letter, correct) {
    let option = document.querySelector('option[value='+letter+']');
    option.disabled = true;
    if (correct) {
        option.setAttribute('class', 'green');
    } else {
        option.setAttribute('class', 'red');
    }
}

function checkGameStatus() {
    if (!wordArr.includes('_')) {
        footer_text.innerHTML = 'Du hast gewonnen!';
        input_btn.value = 'NEUSTART';
    }
    if (fails >= 7) {
        wordArr = word.split('');
        drawWord();
        footer_text.innerHTML = 'Du hast verloren!';
        input_btn.value = 'NEUSTART';
    }
}

function setImage() {
    hang_img.setAttribute('src', fails+'.png');
}

function reset() {
    fails = 0;
    setImage();
    footer_text.innerHTML = '';
    input_btn.value = 'RATEN';
    word = '';
    document.querySelectorAll('option').forEach(e => {
        e.setAttribute('class', '');
        e.disabled = false;
    });
}




