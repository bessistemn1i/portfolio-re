class ElementCheck {
    constructor(obj) {
        this.test = document.querySelector(obj.element);
        this.innerCallback = obj.innerCallback;
        this.events();
    }
    events() {
        let self = this;
        let flag = false;
        window.addEventListener('scroll', function() {
            if(self.test.getBoundingClientRect().top <= window.innerHeight * 0.75 && self.test.getBoundingClientRect().top > 0 && !flag ) {
                self.innerCallback();
                flag = true;
            }
        });
    }
}

export default ElementCheck;