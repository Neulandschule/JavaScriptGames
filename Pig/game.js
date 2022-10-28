
//DOM
const dice_display = document.getElementById('dice_display');
const dice_display_sum = document.getElementById('dice_display_sum');
const div_bad_num = document.getElementById('div_bad_num');
const div_target = document.getElementById('div_target');
const players_list = document.getElementById('player_list');
//DOM-Buttons
const set_bad_num_btn = document.getElementById('set_bad_num');
const set_target_btn = document.getElementById('set_target');
const add_player_btn = document.getElementById('add');
const remove_player_btn = document.getElementById('remove');
const roll_btn = document.getElementById('roll');
const hold_btn = document.getElementById('hold');
const reset_btn = document.getElementById('reset');

//Events
set_bad_num_btn.addEventListener('click', setBadNum);
set_target_btn.addEventListener('click', setTarget);
add_player_btn.addEventListener('click', addPlayer);
remove_player_btn.addEventListener('click', removePlayer);
roll_btn.addEventListener('click', roll);
hold_btn.addEventListener('click', hold);
reset_btn.addEventListener('click', reset);

const dice1 = new Dice(dice_display);
let bad_num = 1;
let target = 100;
let cur_player_index = 0;
let num_sum = 0;



function Player(name) {
    this.name = name;
    this.sum = 0;
}

const players = [];

printNums();
function printNums() {
    div_bad_num.innerHTML = bad_num;
    div_target.innerHTML = target;
}

function setBadNum() {
    let num = prompt('Bitte Zahl (1-6) eingeben:');
    if (num >= 1 && num <= 6) {
        bad_num = num;
        printNums();
    }
}

function setTarget() {
    let num = prompt('Bitte Ziel eingeben:');
    if (num >= 1) {
        target = num;
        printNums();
    }
}

function addPlayer() {
    let name = prompt('Bitte Name eingeben:');
    if (name != '') {
        players.push(new Player(name));
        printPlayerList();
    }
}

function removePlayer() {
    players.pop();
    printPlayerList();
}

function printPlayerList() {
    players_list.innerHTML = '';
    for (let i in players) {
        let div_player_item = document.createElement('div');

        let div_player_name = document.createElement('div');
        div_player_name.innerHTML = players[i].name;

        let div_player_points = document.createElement('div');
        div_player_points.innerHTML = players[i].sum;

        if(i == cur_player_index) {
            div_player_item.setAttribute('class', 'mark');
        }

        div_player_item.append(div_player_name);
        div_player_item.append(div_player_points);
        players_list.append(div_player_item);
    }
}


function roll(){
    let num = dice1.roll();
    if (num != bad_num) {
        num_sum += num;
        dice_display_sum.innerHTML = num_sum;
    }
    else {
        num_sum = 0;
        nextPlayer();
        dice_display_sum.innerHTML = players[cur_player_index].name + ' ist am Zug.';
    }
}

function hold() {
    players[cur_player_index].sum += num_sum;
    if (players[cur_player_index].sum >= target) {
        roll_btn.classList.add('none');
        hold_btn.classList.add('none');
        reset_btn.classList.remove('none');
        dice_display_sum.innerHTML = players[cur_player_index].name + ' gewinnt!';
    }
    else {
        num_sum = 0;
        nextPlayer();
    }
}

function nextPlayer() {
    cur_player_index++;
    if (cur_player_index >= players.length) {
        cur_player_index = 0;
    }
    printPlayerList();
}

function reset() {
    num_sum = 0;
    players.forEach((player) => {
        player.sum = 0;
    });
    printPlayerList();
    roll_btn.classList.remove('none');
    hold_btn.classList.remove('none');
    reset_btn.classList.add('none');
    dice_display_sum.innerHTML = 0;
}