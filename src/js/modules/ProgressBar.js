class Progressbar {
    constructor(obj) {
        this.el = document.querySelector(obj.el);
        this.finish = obj.finish;
        this.width = 0;
        this.update();
    }

    update() {
        let self = this;
        let identity = setInterval(function() {
            if (self.width >= obj.finish) {
                clearInterval(identity);
            }
            else {
                self.width++;
                self.el.style.width = self.width + '%';
                self.el.innerHTML = self.width;
                console.log(self.width);
            }
        }, 100);
    }
}

export default Progressbar;