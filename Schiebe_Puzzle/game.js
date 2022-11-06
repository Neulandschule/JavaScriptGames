const puzzle_div = document.getElementById('puzzle');
const game_dimension = 3;
const all = game_dimension * game_dimension;
const image_prefix = 'dog_';

init();

function init() {
    const random_nums = getRandNumsArr();

    for (let i = 1; i <= all; i++) {
        let piece = document.createElement('img');
        if (i != all) {
            piece.setAttribute('src', 'img/' + image_prefix + random_nums.pop() + '.jpg');
        }
        else {
            piece.setAttribute('src', 'img/empty.jpg');
        }  
        piece.setAttribute('id', i);
        piece.addEventListener('click', clickPiece);
        puzzle_div.append(piece);
    }
}

function clickPiece() {
    let id = this.getAttribute('id');
    let empty_img = document.querySelector('img[src="img/empty.jpg"]');
    let distance = Math.abs(id - empty_img.id);

    if (distance == 1 || distance == game_dimension) {
        let src = this.getAttribute('src');
        empty_img.setAttribute('src', src);
        this.setAttribute('src', 'img/empty.jpg');
        
        if (checkWin()) alert('Du hast es geschafft!');
    }
}

function checkWin() {
    for (let i = 1; i < all; i++) {
        let image = document.getElementById(i);
        if (image.getAttribute('src') != 'img/' + image_prefix + i + '.jpg') {
            return false;
        }
    }
    return true;
}

function getRandNumsArr() {
    const randNumArr = [];
    let max = all - 1
    while (randNumArr.length < max) {
        const r = Math.floor(Math.random() * max) + 1;
        if (randNumArr.indexOf(r) === -1) {
            randNumArr.push(r);
        }  
    }
    return randNumArr;
}




