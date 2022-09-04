const next_img = document.getElementById('next');
const field_images = document.querySelectorAll('.field_img');
const start_btn = document.getElementById('start');
const enemy_select = document.getElementById('enemy');
//const skin_select = document.getElementById('skin');
start_btn.addEventListener('click', start);

let cur_player;
let board = [];
let enemy ='';

const skin = {
  x: 'x.png',
  o: 'o.png'
}

const color = {
  x: 'green',
  o: 'red'
}


start();
function start() {
  field_images.forEach((e) => {
    e.setAttribute('src', '300.png');
    e.addEventListener('click', clickField);
    colorFieldBackground([0, 1, 2, 3, 4, 5, 6, 7, 8], 'gray');
  }); 
  board = ['','','','','','','','','',];
  enemy = enemy_select.value;
  selectSkin();
  cur_player = 'x';
}

function selectSkin() {
  switch (skin_select.value) {
    case 'potter':
      skin.x = 'harry.png';
      skin.o = 'voldemort.png';
      break;
    case 'starwars':
      skin.x = 'yoda.png';
      skin.o = 'vader.png';
      break;
    default: 
      skin.x = 'x.png';
      skin.o = 'o.png';
  }
}


function clickField() {
  let pos = this.getAttribute('pos')
  selectField(pos);
}

function selectField(i) {
  board[i] = cur_player;
  field_img = document.querySelector('img[pos="'+i+'"]');
  field_img.setAttribute('src', skin[cur_player]);
  field_img.removeEventListener('click', clickField);
  if (checkWin(cur_player)) {
    removeAllEventListener();
  }
  else {
    changePlayer();
  };
}

function checkWin(cur_player) {
  let bg_color = color[cur_player];
  //Waagrecht
  for (let i = 0; i < 9; i = i + 3) {
    if (board[i] == cur_player && board[i] == board[i + 1] && board[i + 1] == board[i + 2]) {
      colorFieldBackground([i, i + 1, i + 2], bg_color) 
      return true;
    }
  }
  //Senkrecht
  for (let i = 0; i < 3; i++) {
    if (board[i] == cur_player && board[i] == board[i+3] && board[i+3] == board[i+6]) {
      colorFieldBackground([i, i + 3, i + 6], bg_color) 
      return true;
    }
  }
  //Diagonal
  if (board[0] == cur_player && board[0] == board[4] && board[4] == board[8]) {
    colorFieldBackground([0, 4, 8], bg_color) 
    return true;
  }
  if (board[2] == cur_player && board[2] == board[4] && board[4] == board[6]) {
    colorFieldBackground([2, 4, 6], bg_color) 
    return true;
  }
}

function colorFieldBackground(fields, color) {
  for (v of fields) {
    document.getElementById(v).setAttribute('class', color); 
  }
}

function removeAllEventListener() {
  field_images.forEach((e) => {
    e.removeEventListener('click', clickField);
  }); 
}

function changePlayer() {
  cur_player = (cur_player == 'x') ? 'o' : 'x'; 
  next_img.setAttribute('src', skin[cur_player]);

  
  if (cur_player == 'o') {
    if (enemy == 'easy') {
      setCpuEasyMove();
    }
    if (enemy == 'hard') {
      setCpuHardMove();
    }
  }
  

}

function setCpuEasyMove() {
  selectField(randomFreeField());
}

function setCpuHardMove() {
  let move;
  let checkCPUWin = checkTwo('o');
  if (checkCPUWin !== false) {
    move = checkCPUWin;
  }
  else {
    let checkPlayerWin = checkTwo('x');
    if (checkPlayerWin !== false) {
      move = checkPlayerWin;
    }
    else {
      move = randomFreeField();
    }
  }
  selectField(move);
}


function randomFreeField() {
  let free_index = [];
  for (let i in board) {
    if (board[i] == '') {
      free_index.push(i);
    }
  }
  let random_num = Math.floor(Math.random() * (free_index.length));
  return free_index[random_num];
}

function checkTwo(player) {
  //Diagonal
  if(board[0] == player && board[4] == player && board[8] == '') {
    return 8;
  }
  if(board[4] == player && board[8] == player && board[0] == '') {
    return 0;
  }
  if(board[0] == player && board[8] == player && board[4] == '') {
    return 4;
  }

  if(board[2] == player && board[4] == player && board[6] == '') {
    return 6;
  }
  if(board[2] == player && board[6] == player && board[4] == '') {
    return 4;
  }
  if(board[4] == player && board[6] == player && board[2] == '') {
    return 2;
  }

  //Waagrecht
  for (let i = 0; i < 9; i = i + 3) {
    if (board[i] == player && board[i] == board[i + 1] && board[i+2] == '') {
      return i+2
    }
    if (board[i] == player && board[i] == board[i + 2] && board[i+1] == '') {
      return i+1
    }
    if (board[i+1] == player && board[i+1] == board[i+2] && board[i] == '') {
      return i
    }
  }

  //Senkrecht
  for (let i = 0; i < 3; i++) {
    if (board[i] == player && board[i] == board[i+3] && board[i+6] == '') {
      return i+6;
    }
    if (board[i] == player && board[i] == board[i+6] && board[i+3] == '') {
      return i+3;
    }
    if (board[i+3] == player && board[i+3] == board[i+6] && board[i] == '') {
      return i;
    }
  }
  return false;
}


