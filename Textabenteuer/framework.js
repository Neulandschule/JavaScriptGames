
let text = document.getElementById('text');
let actions = document.getElementById('actions');
let player_name;


let data = {
    1: {
        text: 'Hallo [NAME]! Hier steht A',
        opt: [
            {
                    ref: 2,
                    text: 'Gehe zu B' 
            },
            {
                    ref: 3,
                    text: 'Gehe zu C'
            }   
        ]
    },
    2: {
        text: 'Hier steht B',
        opt: [
            {
                    ref: 1,
                    text: 'Gehe zu A' 
            },
        ]
    },
    3: {
        text: 'Hier steht C',
        opt: [
            {
                    ref: 1,
                    text: 'Gehe zu A' 
            },
            {
                ref: 'ende',
                text: 'Ende' 
            },
        ]
    }
};

renderHome();

function renderHome() {
    actions.innerHTML = '';
    text.innerHTML = "Einleitung"
    let name_input = document.createElement('input');
    name_input.type = 'text';
    name_input.id = 'player_name';
    name_input.placeholder = 'Bitte hier den Namen eingeben.'
    let start_btn = document.createElement('input');
    start_btn.type = 'button';
    start_btn.value = 'Start';
    start_btn.addEventListener('click', start);
    actions.append(name_input, start_btn);
}

function start() {
    player_name = document.getElementById('player_name').value;
    renderChapter(1);
}



function renderChapter(id) {
    let t = data[id].text
    text.innerHTML = data[id].text.replace('[NAME]', player_name);
    actions.innerHTML = '';
    for (let o of data[id].opt) {
        let input = document.createElement('input');
        input.type = 'button';
        input.value = o.text;
        input.ref = o.ref;
        input.addEventListener('click', pick);
        actions.append(input);
    }  
}

function pick() {
    if (this.ref == 'ende') {
        renderHome();
    }
    else {
        renderChapter(this.ref);
    }
    
}



