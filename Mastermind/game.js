const main_display = document.querySelector('main');
const div_select_colors = document.getElementById('div-select-color');
const crack_button = document.getElementById('crack-btn');

let codeLength = 4;
let trys = 8;
let colors = ['blue', 'yellow', 'orange', 'green', 'violet', 'purple'];

let random_code = [];
let crackTry = 1;


init();

function init() {
    random_code = [];
    crackTry = 1;
    main_display.innerHTML = '';
    div_select_colors.innerHTML = '';
    //Versuche
    for (let i = 1; i <= trys; i++) {
        let div_try = document.createElement('div');
        div_try.setAttribute('id', 'try-'+i);
        div_try.setAttribute('class', 'try');
        let div_left = document.createElement('div');
        div_left.setAttribute('class', 'left');
        let div_right = document.createElement('div');
        div_right.setAttribute('class', 'right');

        for (let i = 1; i <= codeLength; i++) {
            let div_l = document.createElement('div');
            let div_r = document.createElement('div');
            div_left.append(div_l);
            div_right.append(div_r);
        }

        div_try.append(div_left);
        div_try.append(div_right);
        main_display.prepend(div_try);
        
    }
    //Code Eingabe
    for (let i = 1; i <= codeLength; i++) {
        let div_select_wrapper = document.createElement('div');
        div_select_wrapper.setAttribute('class', 'select-wrapper');
        let select = document.createElement('select');

        //Farben 
        for (let color of colors) {
            let option = document.createElement('option');
            option.setAttribute('style', 'background-color:'+color);
            option.setAttribute('value', color);
            select.append(option);
        }
        select.setAttribute('style', 'background-color:'+colors[0]);

        select.addEventListener('change', (e) => {
            e.target.setAttribute('style', 'background-color:'+e.target.value);
        });

        div_select_wrapper.append(select);
        div_select_colors.append(div_select_wrapper);
    }
    createRandomCode();
}

function createRandomCode() {
    for (let i = 1; i <= codeLength; i++) {
        let random_color = colors[Math.floor(Math.random() * colors.length)]
        random_code.push(random_color);
    }
    console.log(random_code);
}

crack_button.addEventListener('click', (e) => {
    
    let input_colors = document.querySelectorAll('.select-wrapper>select');
    let input_colors_arr = [];
    for (let v of input_colors) {
        input_colors_arr.push(v.value);
    }
    show('left', input_colors_arr);
    correction_Array = createCorrectionArray(input_colors_arr);
    show('right', correction_Array);
    crackTry++;
    checkWin(correction_Array);

});


function show(type, colors) {
    let tryView = document.querySelectorAll('#try-'+crackTry+'>.'+type+'>div');
    tryView.forEach((v, i) => {
        v.setAttribute('style', 'background-color:'+colors[i]);
    });
}

function createCorrectionArray(input_colors_arr) {
    let random_code_copy = [...random_code];
    let correction_Array = [];
    
    //Richtige Position
    for (let i in random_code_copy) {
        if (random_code_copy[i] == input_colors_arr[i])  {
            random_code_copy[i] = null;
            input_colors_arr[i] = null;
            correction_Array.push('red');
        }
    }
    //Falsch Position
    for (let i in random_code_copy) {
        for (j in input_colors_arr) {
            if (random_code_copy[i] != null && random_code_copy[i] == input_colors_arr[j]) {
                random_code_copy[i] = null;
                input_colors_arr[j] = null;
                correction_Array.push('white');
            }
        }
    }
    return correction_Array;
}

function checkWin(correction_Array) {
    let countCorrect = 0;
    for (let v of correction_Array) {
        if (v == 'red') {
            countCorrect++;
        }
    }
    if (countCorrect == codeLength) {
        alert('Du hast es geschafft!');
        init();
    } else if(crackTry > trys) {
        alert('Du hast leider verloren!');
        init();
    }
}
