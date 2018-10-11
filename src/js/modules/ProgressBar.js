class Progressbar {
    constructor(obj) {
        this.el = document.querySelector(obj.el);
        this.finish = obj.finish;
        this.width = 0;
        this.background = obj.background;
        this.update();
    }

    update() {
        let self = this;
        let identity = setInterval(function() {
            if (self.width >= self.finish) {
                clearInterval(identity);
            }
            else {
                self.width++;
                self.el.style.width = self.width + '%';
                self.el.innerHTML = self.width;
            }
        }, 20);
        
        self.el.style.backgroundColor = self.background;
    }
}

export default Progressbar;