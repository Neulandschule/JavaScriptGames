class Dice {

    constructor(container) {
        this.container = container;
        this.id = this.container.getAttribute('id');
        this.createTemplate();
    }

    createTemplate() {
        const dice_div = document.createElement('div');
        dice_div.setAttribute('class', 'dice');
        for (let i = 1; i <= 9; i++) {
            let ninth_div = document.createElement('div');
            ninth_div.setAttribute('class', 'ninth');
            let circle_div = document.createElement('div');
            circle_div.setAttribute('class', 'dice-' + i + ' circle none');
            ninth_div.append(circle_div);
            dice_div.append(ninth_div);
        }
        this.container.append(dice_div);
    }

    roll() {
        this.resetEyes();
        let random = Math.floor(Math.random() * 6 + 1)
        this.showEyes(random);
        return random;
    }

    showEyes(random) {
        switch (random) {
            case 1:
                document.querySelector('#' + this.id + ' .dice-' + 5).classList.remove('none');
                break;
            case 2: 
                document.querySelector('#' + this.id + ' .dice-' + 1).classList.remove('none');
                document.querySelector('#' + this.id + ' .dice-' + 9).classList.remove('none');
                break;
            case 3: 
                document.querySelector('#' + this.id + ' .dice-' + 1).classList.remove('none');
                document.querySelector('#' + this.id + ' .dice-' + 5).classList.remove('none');
                document.querySelector('#' + this.id + ' .dice-' + 9).classList.remove('none');
                break;
            case 4: 
                document.querySelector('#' + this.id + ' .dice-' + 1).classList.remove('none');
                document.querySelector('#' + this.id + ' .dice-' + 3).classList.remove('none');
                document.querySelector('#' + this.id + ' .dice-' + 7).classList.remove('none');
                document.querySelector('#' + this.id + ' .dice-' + 9).classList.remove('none');
                break;
            case 5:
                document.querySelector('#' + this.id + ' .dice-' + 1).classList.remove('none');
                document.querySelector('#' + this.id + ' .dice-' + 3).classList.remove('none');
                document.querySelector('#' + this.id + ' .dice-' + 5).classList.remove('none');
                document.querySelector('#' + this.id + ' .dice-' + 7).classList.remove('none');
                document.querySelector('#' + this.id + ' .dice-' + 9).classList.remove('none');
                break;
            case 6:
                document.querySelector('#' + this.id + ' .dice-' + 1).classList.remove('none');
                document.querySelector('#' + this.id + ' .dice-' + 3).classList.remove('none');
                document.querySelector('#' + this.id + ' .dice-' + 4).classList.remove('none');
                document.querySelector('#' + this.id + ' .dice-' + 6).classList.remove('none');
                document.querySelector('#' + this.id + ' .dice-' + 7).classList.remove('none');
                document.querySelector('#' + this.id + ' .dice-' + 9).classList.remove('none');
                break;
        }
    }

    resetEyes() {
        let eyes = document.querySelectorAll('#' + this.id +' .circle');
        eyes.forEach((e) => {
            e.classList.add('none');
        });
    }



}