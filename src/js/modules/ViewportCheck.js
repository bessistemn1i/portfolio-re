class ViewportCheck {
    constructor(obj) {
        this.elem = document.querySelector(obj.elem);
        this.check();
        this.callback = obj.callback;
    }

    check() {

        let self = this;
        let flag = false;

        window.onscroll = function() {
            if (self.elem.getBoundingClientRect().top <= window.innerHeight * 0.75 && self.elem.getBoundingClientRect().top > 0 && !flag) {
                self.callback();
                flag = true;
            }
        }
    }
}

export default ViewportCheck;