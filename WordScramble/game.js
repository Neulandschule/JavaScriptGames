//DOM
const select_word = document.getElementById('wordlist');
const start_btn = document.getElementById('start_btn');
const word_div = document.getElementById('word');
const word_ip = document.getElementById('word_ip');
const count_span = document.getElementById('count_span');
const all_span = document.getElementById('all_span');
const win_div = document.getElementById('win_div');

//Globals
let selected_words = [];
let word;
let word_rand;
let count;

setOptions();
init();

start_btn.addEventListener('click', function() {
    init();
}); 

document.addEventListener('keypress', function(e) {
    if(e.key == 'Enter') {
        answer();
    }
});


function setOptions() {
    for (let key in data) {
        let opt = document.createElement('option');
        opt.value = key;
        opt.innerHTML = key;
        select_word.append(opt);
    }   
}


function init() {
    //Resets
    win_div.setAttribute('class', 'hidden');
    count = 0;
    word = null;
    word_rand = null;
    selected_words = [];
    //Load Data
    for (let v of data[select_word.value]) {
        selected_words.push(v.toUpperCase());
    }
    count_span.innerHTML = count;
    all_span.innerHTML = selected_words.length;
    getRandomWord();
    word_ip.focus();  
}

function getRandomWord() {
    let random_num = Math.floor(Math.random() * selected_words.length);
    word = selected_words.splice(random_num, 1).join('');
    console.log(selected_words);
    rand_word = shuffleWord(word);
    word_div.innerText = rand_word;
}

function shuffleWord(word) {
    let arr = word.split('');
    do {
        for (let i in arr) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }

    } while (arr.join('') == word);
    return arr.join('')
}

function answer() {
    if (word_ip.value.toUpperCase() == word) {
        count++;
        count_span.innerHTML = count;
        if (selected_words.length > 0) {
            getRandomWord();
        }
        else {
            win_div.classList.remove('hidden');
        } 
    }
    word_ip.value = '';
}


