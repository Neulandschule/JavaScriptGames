//DOM
let game_main = document.getElementById('game_main');
let select_quantity = document.getElementById('select_quantity');
let input_time = document.getElementById('input_time');
let input_start = document.getElementById('input_start');

const squares = 40;
let quantity;
let time;
let random_numbers = [];

start();
input_start.addEventListener('click', start);

function start() {
    quantity = select_quantity.options[select_quantity.selectedIndex].value;
    time = input_time.value;
    initGameBoard();
    randomArrayWithNumbers(quantity, squares);
    showNumbers();
}

function initGameBoard() {
    game_main.innerHTML = '';
    for (let i = 0; i < squares; i++) {
            let square = document.createElement('div');
            square.setAttribute('class', 'square');
            square.setAttribute('id', 'square_' + i);
            square.addEventListener('click', squareClick);
            game_main.appendChild(square);
    }
};


function randomArrayWithNumbers(length, max) {
    random_numbers = [];
    while (random_numbers.length < length) {
        let r = Math.floor(Math.random() * max);
        if (random_numbers.indexOf(r) === -1) {
            random_numbers.push(r);
        }
    }
    console.log(random_numbers);
}


function showNumbers() {
    for (let i in random_numbers) {
        let square = document.getElementById('square_' + random_numbers[i]);
        square.innerText = +i + 1;
    }
    setTimeout(() => {
        setSquareColor('white');
    }, time);
}

function setSquareColor(color) {
    for (let i in random_numbers) {
        let square = document.getElementById('square_' + random_numbers[i]);
        square.setAttribute('class', 'square ' + color);
    }
}


function squareClick(e) {
    let id = e.target.id.slice(7);
    if (random_numbers[0] == id) {
        e.target.classList.remove('white');
        random_numbers.shift();
    }
    else {
        setSquareColor('trans_red');
    }
}



