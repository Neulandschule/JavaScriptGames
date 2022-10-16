const d1container = document.getElementById('dice_1');
const btn = document.getElementById('myBtn');

btn.addEventListener('click', roll);

const dice1 = new Dice(d1container);


function roll() {
    let num = dice1.roll();

    console.log(num);
}

