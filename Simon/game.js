//DOM
const display_level = document.getElementById('level');
const start_btn = document.getElementById('start-btn');

//Variablen
let showtime = 1000;
let arr = [];
let index = 0;
let player = false;
let runIntervall;

//Audios
let green_audio = new Audio('audio/green.mp3');
let red_audio = new Audio('audio/red.mp3');
let yellow_audio = new Audio('audio/yellow.mp3');
let blue_audio = new Audio('audio/blue.mp3');

//Klick-Events
function addEventListenerToColorButtons() {
    let color_btns = document.getElementsByClassName('color-button');
    for (color_btn of color_btns) {
        color_btn.addEventListener('click', clickColor);
        color_btn.classList.add('clickable');
    }
}

function removeEventListenerToColorButtons() {
    let color_btns = document.getElementsByClassName('color-button');
    for (color_btn of color_btns) {
        color_btn.removeEventListener('click', clickColor);
        color_btn.classList.remove('clickable');
    }
}

start_btn.addEventListener('click', () => {
    display_level.classList.remove('none');
    start_btn.classList.add('none');
    runGame();
});



function runGame() {
    index = 0;
    if (player) {
        addEventListenerToColorButtons();
    } else {
        removeEventListenerToColorButtons()
        arr.push(getRandowColor());
        display_level.innerHTML = arr.length;
        runIntervall = setInterval(runSequenz, showtime);
    }
}

function runSequenz() {
    let color_btn = document.getElementById(arr[index]);
    color_btn.classList.add('glow');
    playSound(color_btn.id);
    index++;

    setTimeout(() => {
        color_btn.classList.remove('glow');
        if (index >= arr.length) {
            clearInterval(runIntervall); 
            player = true;
            runGame();
        }
    }, showtime - 200);
}

function clickColor() {
    color_id = this.id;
    playSound(color_id);
    if (arr[index] != color_id) {
        alert('Leider falsche Reihenfolge');
        reset();
    } else {
        index++;
        if (index >= arr.length) {
            player = false;
            runGame();
        }
    }
}


function playSound(color) {
    switch (color) {
        case 'green': green_audio.play(); break;
        case 'red': red_audio.play(); break;
        case 'yellow': yellow_audio.play(); break;
        case 'blue': blue_audio.play(); break;
    }
}

function getRandowColor() {
    let num = Math.floor((Math.random() * 4) + 1);
    let color;
    switch(num) {
        case 1: color = 'green'; break;
        case 2: color = 'red'; break;
        case 3: color = 'yellow'; break;
        case 4: color = 'blue'; break;
    }
    return color;
}

function reset() {
    arr = [];
    index = 0;
    player = false;
    display_level.classList.add('none');
    start_btn.classList.remove('none');
}





