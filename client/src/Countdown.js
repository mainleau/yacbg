class Countdown {
    constructor(duration) {
        this.element = this.create();

        this.duration = duration;
        this.last = null;
        this.startTime = Date.now();
        this.interval = null;

        this.update();
    }

    create() {
        const element = document.createElement('span');
        return element;
    }

    resume() {
        if(this.interval) {
            this.interval = clearInterval(this.interval);
            this.duration -= (((Date.now() - this.startTime) / 1000) | 0);
        } else {
            this.startTime = Date.now();
            this.update();
            this.interval = setInterval(() => this.update(), 1000);
        }
    }

    update() {
        var diff = this.duration - (((Date.now() - this.startTime) / 1000) | 0);

        var minutes = (diff / 60) | 0;
        var seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        this.element.textContent = minutes + ':' + seconds;
    }
}

export default Countdown;