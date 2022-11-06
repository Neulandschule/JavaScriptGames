const puzzle_div = document.getElementById('puzzle');
const game_dimension = 5;
const all = game_dimension * game_dimension;
const image_prefix_1 = 'blond_';
const image_prefix_2 = 'brunette_';


init();

function init() {
    for (let i = 1; i <= all; i++) {
        let img = document.createElement('img');
        let prefix = (Math.random() < 0.5) ? image_prefix_1 : image_prefix_2;
        setImageAttributes(img, prefix, i);
        img.addEventListener('click', clickImage);
        puzzle_div.append(img);
    }
}

function setImageAttributes(img, prefix, pos) {
    img.setAttribute('src', 'img/' + prefix + pos + '.jpg');
    img.setAttribute('prefix', prefix);
    img.setAttribute('pos', pos);
}

function clickImage() {


    flipImage(this);
    let pos = Number(this.getAttribute('pos'));
    

    //Image Right
    if (!Number.isInteger(pos / game_dimension)) {
        let pos_right = pos + 1;
        let image_right = document.querySelector('img[pos="' + pos_right + '"]');
        flipImage(image_right);
    }
    //Image Left
    if (!Number.isInteger((pos - 1 + game_dimension) / game_dimension)) {
        let pos_left = pos - 1;
        let image_left = document.querySelector('img[pos="' + pos_left + '"]');
        flipImage(image_left);
    }
    //Image Top
    if (pos - game_dimension > 0) {
        let pos_top = pos - game_dimension;
        let image_top = document.querySelector('img[pos="' + pos_top + '"]');
        flipImage(image_top);
    }
    //Image Buttom
    if (pos + game_dimension < game_dimension * game_dimension) {
        let pos_buttom = pos + game_dimension;
        let image_buttom = document.querySelector('img[pos="' + pos_buttom + '"]');
        flipImage(image_buttom);
    }
    
    if (checkWin()) alert('Du hast es geschafft!');

}

function flipImage(image) {
    let prefix = image.getAttribute('prefix');
    let pos = image.getAttribute('pos');
    if (prefix == image_prefix_1) {
        setImageAttributes(image, image_prefix_2, pos);
    }
    else {
        setImageAttributes(image, image_prefix_1, pos);
    }
}



function checkWin() {
    let images = document.querySelectorAll('#puzzle img');
    let prefix = images[0].getAttribute('prefix');;
    for (let image of images) {
        if (image.getAttribute('prefix') !== prefix) {
            return false;
        }
    }
    return true;
}


