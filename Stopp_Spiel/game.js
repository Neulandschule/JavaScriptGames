const btn_start = document.getElementById('btn_start');
const btn_stopp = document.getElementById('btn_stopp');
const display = document.getElementById('display');
const random_num_display = document.getElementById('random_num_display');
const difference_display = document.getElementById('difference_display');
const tolerance_display = document.getElementById('tolerance_display');
const points_display = document.getElementById('points_display');
const stopp_image = document.getElementById('stopp_image');

btn_start.addEventListener('click', start);
btn_stopp.addEventListener('click', stopp);

let watch = new Stopwatch(display);

const min_time = 3000;
const max_time = 6000;
const tolerance = 1000;
tolerance_display.innerHTML = watch.formatTime(tolerance);
let random_num;
let points = 0;



function start() {
    watch.start();
    random_num = getRandomTime(min_time, max_time);
    console.log(random_num);
    random_num_display.innerHTML = watch.formatTime(random_num)
    setView(true);
}



function stopp() {
    let stoptime = watch.stopp();
    let difference = Math.abs(random_num - stoptime);
    difference_display.innerHTML = watch.formatTime(difference);
    if (difference <= tolerance) {
        points += 1;
        difference_display.setAttribute('class', 'green');
    }
    else {
        points -= 1;
        difference_display.setAttribute('class', 'red');
    }
    points_display.innerHTML = points;

    setView(false);
}


function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}



function setView(running) {
    if (running) {
        btn_start.setAttribute("disabled", "");
        btn_stopp.removeAttribute("disabled", "");
        stopp_image.setAttribute('src', 'chronograph.gif');
        difference_display.setAttribute('class', '');
        difference_display.innerHTML = '';
        display.setAttribute('class', 'black');


    }
    else {
        btn_start.removeAttribute("disabled", "");
        btn_stopp.setAttribute("disabled", "");
        stopp_image.setAttribute('src', 'chronograph.png');
        display.setAttribute('class', '');
    }
}