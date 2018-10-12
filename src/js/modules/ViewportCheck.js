class ViewportCheck {
    constructor(obj) {
        this.elem = document.querySelectorAll(obj.el);
        this.callback = obj.callback;
        this.check();
    }

    check() {
        let self = this;
        let flag = false;
        window.addEventListener('scroll', function() {
            for (let i = 0; i < self.elem.length; i++) {
                let item = self.elem[i];

                if(item.getBoundingClientRect().top <= window.innerHeight * 0.75 && item.getBoundingClientRect().top > 0 && !flag) {
                    self.callback();
                    flag = true;
                }
            }
        });
    }
}

export default ViewportCheck;