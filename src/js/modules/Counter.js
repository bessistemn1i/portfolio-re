class Counter {
    constructor(obj) {
        this.el = document.querySelector(obj.el);
        this.start = 0;
        this.finish = obj.finish;
        this.event();
    }
    event() {
        let self = this;
        let counter = setInterval(function() {
            if (self.start >= self.finish) {
                clearInterval(counter);
            }

            else {
                self.start++;
                self.el.innerHTML = self.start;
            }
        },1000);
    }
}

export default Counter;