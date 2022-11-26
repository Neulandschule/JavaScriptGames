const towers = document.getElementsByClassName('tower');
const selectbox = document.getElementById('select-size');

let size = 0;
let dragging_disc = null;

selectbox.addEventListener('change', (e) => {
    size = e.target.value;
    if (size != 0) {
        createTower();
    }
});




function createTower() {
    reset();
    let percent = 100 / size;
    let percent_sum = 0
    for (let i = 1; i <= size; i++) {
        percent_sum += percent;
        let disc = document.createElement('div');
        disc.setAttribute('id', i);
        disc.setAttribute('class', 'disc');
        disc.style.width = percent_sum +'%';
        disc.style.height = '30px';

        disc.addEventListener('dragstart', (e) => {
            dragging_disc = e.target;
        });
        towers[0].append(disc);
    }
    setDragable();
}

function reset() {
    for (tower of towers) {
        tower.innerHTML = '';
    }
}

function setDragable() {
    for (tower of towers) {
        for (disc of tower.children) {
            disc.setAttribute('draggable', false);
        }
        if (tower.firstChild != null) {
            tower.firstChild.setAttribute('draggable', true);
        }
    }
}

for (const tower of towers) {
    tower.addEventListener('dragover', (e) => {
        if (dragging_disc.getAttribute('draggable') == 'true') {
            if (e.target.firstChild == null || dragging_disc.id < e.target.firstChild.id) {
                e.preventDefault();
            }
        }
    });
    tower.addEventListener('drop', (e) => {
            e.target.prepend(dragging_disc);
            setDragable();
            checkWin();
    });
}


function checkWin() {
    if (towers[2].children.length == size) {
        alert('Du hast es geschafft!!!');
    };
}




