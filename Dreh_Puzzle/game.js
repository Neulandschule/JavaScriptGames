const puzzle_div = document.getElementById('puzzle');

const horse_puzzle = {
    name: 'horses_',
    pieces: 24,
    format: '.jpg'
}

init(horse_puzzle);

function init(horse_puzzle) {
    for (let i = 1; i <= horse_puzzle.pieces; i++) {
        let piece = createImageDiv(horse_puzzle, i);
        puzzle_div.append(piece);
    }
}

function createImageDiv(puzzle, id) {
    let piece = document.createElement('img');
    piece.setAttribute('src', 'img/' + puzzle.name + id + puzzle.format);
    piece.setAttribute('class', 'piece');
    piece.setAttribute('rot', Math.floor(Math.random() * 4));
    piece.addEventListener('click', turn);
    return piece;
};

function turn() {
    let rot = this.getAttribute('rot');
    let new_rot = parseInt(rot) + 1;
    if (new_rot >= 4) {
        new_rot = 0;
    }
    this.setAttribute('rot', new_rot);
    checkFinish();
}

function checkFinish() {
    let images = document.querySelectorAll('img.piece');
    for (img of images) {
        if (img.getAttribute('rot') != 0) {
            return false;
        }
    }
    alert('Du hast es geschafft!');
}




