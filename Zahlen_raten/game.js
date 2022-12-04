//DOM
const color_divs = document.querySelectorAll('#left>.color');
const color_text_divs = document.querySelectorAll('#right>.color');
const mix_btn = document.getElementById('mix-btn');
const check_btn = document.getElementById('check-btn');
const color_select = document.getElementById('color-select'); 

mix_btn.addEventListener('click', mix);

check_btn.addEventListener('click', (e) => {
    (checkColors()) ? alert('Gut gemacht!') : alert('Leider! falsch');
});

color_select.addEventListener('change', (e) => {
    colors = e.target.value;
});


let colors = 'primary';
const html_primary_colors = ['#000000','#800000','#008000','#808000','#000080','#800080','#008080','#808080',
'#C0C0C0','#FF0000','#00FF00','#FFFF00','#0000FF','#FF00FF','#00FFFF','#FFFFFF' ];


let temp_item = null;
mix();


// Drag and Drop
for (item of color_text_divs) {
    item.addEventListener('dragstart', (e) => {
        temp_item = e.target;
        e.dataTransfer.setData('text/html', e.target.innerHTML);
    });
    item.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    item.addEventListener('drop', (e) => {
        if (temp_item !== e.target) {
            temp_item.innerHTML = e.target.innerHTML;
            e.target.innerHTML = e.dataTransfer.getData('text/html');
        }
    });
}


function mix() {
    //let selected_colors = ['#000000','#800000','#ffffff'];
    let selected_colors;
    if (colors == 'primary') {
        selected_colors = getRandomPrimaryColors();
    }
    else {
        selected_colors = getRandomAllColors();
    }
    
    let shuffledColors = [...selected_colors];
    shuffledColors = shuffledColors.sort(function () {
        return Math.random() - 0.5;
    });

    for (item of color_divs) {
        const color = selected_colors.pop();
        item.setAttribute('data-color', color);
        item.style.backgroundColor = color;
    }

    for (item of color_text_divs) {
        item.innerHTML = shuffledColors.pop();
    }
}


function getRandomPrimaryColors() {
    let colors = [...html_primary_colors];
    colors = colors.sort(function () {
        return Math.random() - 0.5;
    });
    return colors.slice(0, 3);
}

function getRandomAllColors() {
    let colors = [];
    let letter = '0123456789ABCDEF';
    for (let i = 0; i < 3; i++) {
        let color = '#';
        for (let j = 0; j < 6; j++) {
            color += letter[Math.floor(Math.random() * 16)];
        }
        colors.push(color);
    }
    return colors;
}




function checkColors() {
    const color_divs = document.querySelectorAll('#left>.color');
    const color_text_divs = document.querySelectorAll('#right>.color');
    for (let i = 0; i < 3; i++) {
        if (color_divs[i].getAttribute('data-color') !== color_text_divs[i].innerHTML) {
            return false;
        }
    }
    return true;
}














