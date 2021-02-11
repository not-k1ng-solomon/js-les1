// bad code
window.addEventListener('load', function () {

    let timer1 = new Timer('.timer1', 10);
    let timer2 = new Timer('.timer2', 30);
    let timer3 = new TimerFormat('.timer3', 5000);
    let timer4 = new TimerFormatDeclination('.timer4', 10);

    timer1.start();
    timer2.start();
    // console.log(timer1)
    document.querySelector('.pr2buy').addEventListener('click', function () {
        this.disabled = true;
        this.innerHTML = 'Скидка ваша!';
        timer2.stop();
    });

    // console.log(timer3)
    timer3.start();
    timer4.start();

});

class Timer {
    constructor(selector, time) {
        this.box = document.querySelector(selector);
        this.time = time;
        this.interval;
        this.render();
    }

    render() {
        this.box.innerHTML = this.time;
    }

    start() {
        this.interval = setInterval(() => {
            this.tick();
        }, 1000);
    }

    tick() {
        this.time--;
        this.render();

        if (this.time <= 0) {
            this.stop();
        }
    }

    stop() {
        clearInterval(this.interval);
    }
}

class TimerFormat extends Timer {
    render() {
		let tp = this.splitTime();
        this.box.innerHTML = `${tp.h}:${tp.m}:${tp.s}`;
    }

    splitTime() {
        let h = parseInt(this.time / 3600);
        let hs = this.time % 3600;
        let m = parseInt(hs / 60);
        let s = hs % 60;
        return {h, m, s};
    }
}

class TimerFormatDeclination extends TimerFormat {
    constructor(selector, time, onEnd = function () {
        console.log(1)
    }) {
        super(selector, time);
        this.end = onEnd;
        // console.log(end);
    }

	render() {
		let tp = this.splitTime();
        let h_dictionary = ['час', 'часа', 'часов'];
        let m_dictionary = ['минута', 'минуты', 'минут'];
        let s_dictionary = ['секунда', 'секунды', 'секунд'];
        let h_print = this.declination(tp.h, h_dictionary);
        let m_print = this.declination(tp.m, m_dictionary);
        let s_print = this.declination(tp.s, s_dictionary);
        this.box.innerHTML = `${tp.h} ${h_print}: ${tp.m} ${m_print}: ${tp.s} ${s_print}`;
    }

    declination(n, text_forms) {
        n = Math.abs(n) % 100;
        let n1 = n % 10;
        if (n > 10 && n < 20) {
            return text_forms[2];
        }
        if (n1 > 1 && n1 < 5) {
            return text_forms[1];
        }
        if (n1 == 1) {
            return text_forms[0];
        }
        return text_forms[2];
    }

    start() {
        this.interval = setInterval(() => {
            this.tick();
        }, 100);
    }

    stop() {
        super.stop();
        this.end();
    }
}
