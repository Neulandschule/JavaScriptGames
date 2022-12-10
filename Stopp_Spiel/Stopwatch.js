class Stopwatch {
    constructor(display) {
        this.display = display
        this.time = 0;
        this.delay = 10;
        this.interval = null;
    }

    start() {
        this.time = 0;
        if (!this.interval) {
            let t=this;
            this.interval = setInterval(() => {
                t.update();
            }, this.delay);
        }
    }

    update() {
        this.time += this.delay;
        this.displayTime();
    }

    stopp() {
        clearInterval(this.interval);
        this.interval = null;
        return this.time;
    }

    displayTime() {
        //display.innerHTML = this.time;
        display.innerHTML = this.formatTime(this.time);
    }

/*     formatTime(ms) {
        var hours   = Math.floor(ms / 3600000);
        var minutes = Math.floor((ms - (hours * 3600000)) / 60000);
        var seconds = Math.floor((ms - (hours * 3600000) - (minutes * 60000)) / 1000);
        var cs = Math.floor((ms - (hours * 3600000) - (minutes * 60000) - (seconds * 1000))/this.delay);
     
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        //return hours+':'+minutes+':'+seconds+'.'+ds;
        return seconds+'.'+cs;
    } */


    
/*     formatTime(ms) {
        const d = new Date(Date.UTC(0, 0, 0, 0, 0, 0, ms));
        return `${String(d.getUTCMinutes()).padStart(2, "0")}:${String(
            d.getUTCSeconds()
        ).padStart(2, "0")}.${String(d.getUTCMilliseconds() / this.delay).padStart(2, "0")}`;
    } */

    formatTime(ms) {
        const d = new Date(Date.UTC(0, 0, 0, 0, 0, 0, ms));
        
        let min = String(d.getUTCMinutes()).padStart(2, "0") + ':';
        let sec = String(d.getUTCSeconds()).padStart(2, "0") + '.';
        let cs = String(Math.round(d.getUTCMilliseconds() / 10)).padStart(2, "0")

        return min + sec + cs;
    }

    
    
}