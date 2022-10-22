//DOM Elements
const d1container = document.getElementById('dice_1');
const d2container = document.getElementById('dice_2');
const flaps = document.querySelectorAll('.flap');
const roll_btn = document.getElementById('roll_btn');
const info_txt = document.getElementById('info');

//Events
roll_btn.addEventListener('click', roll);
flaps.forEach((e) => {
    e.addEventListener('click', selectFlap);
} );

//Objects
const dice1 = new Dice(d1container);
const dice2 = new Dice(d2container);

//Globales
let selectable = true;
let selectableNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let markedNums = [];
let d1;
let d2;

function roll() {
    if (roll_btn.value == 'NEUSTART') {
        reset();
    }
    else {
        d1 = dice1.roll();
        d2 = dice2.roll();
        roll_btn.disabled = true;
        if (isGameOver()) {
            roll_btn.value = 'NEUSTART';
            roll_btn.disabled = false;
            info_txt.innerHTML = 'Keine Züge mehr möglich!';
        };
    }
    selectable = true;
}

function selectFlap() {
    if (selectable) {
        let selectedNum = Number(this.innerHTML);
        index = markedNums.indexOf(selectedNum);
        if (index == -1) {
            markedNums.push(selectedNum);
            this.classList.remove('light');
            this.classList.add('marked');
        }
        else {
            markedNums.splice(index, 1);
            this.classList.remove('marked');
            this.classList.add('light');
        }

        if (check()) {
            selectableNums = selectableNums.filter(x => !markedNums.includes(x));
            flipFlaps();
            markedNums = [];
            roll_btn.disabled = false;
            selectable = false;
            if (selectableNums.length == 0) {
                info_txt.innerHTML = 'Du hast gewonnen!';
                roll_btn.value = 'NEUSTART';
            }
        };
    }
}


function check() {
    sum_flaps = markedNums.reduce((a, b) => a + b, 0);
    sum_dice = d1 + d2;
    if (sum_flaps == sum_dice) {
        return true;
    }
    return false;
}

function flipFlaps() {
    let markedFlaps = document.querySelectorAll('.flap.marked');
    markedFlaps.forEach((flap) => {
        flap.removeEventListener('click', selectFlap);
        flap.classList.remove('pointer');
        flap.classList.remove('marked');
        flap.classList.add('dark');
    });
}


function isGameOver() {
    dice_sum = d1 + d2;
    let possibilities = arrSumPossibilities(dice_sum, selectableNums);
    if (possibilities.length > 0) {
        return false;
    }
    return true;
}


function reset() {
    info_txt.innerHTML = '';
    roll_btn.value = 'WÜRFELN';
    flaps.forEach((e) => {
        e.setAttribute('class', 'flap light pointer');
        e.addEventListener('click', selectFlap);
    });
    dice1.resetEyes();
    dice2.resetEyes();
    selectableNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
} 