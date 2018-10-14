import gumshoe from '../../../node_modules/gumshoejs/dist/js/gumshoe.min';
import SmothScroll from '../../../node_modules/smooth-scroll/dist/smooth-scroll.min';

class SpyScroll {
    constructor () {
        this.events();
    }

    events() {
        this.scroll = new SmothScroll('.menu__link');
        gumshoe.init({
            activeClass: 'menu__link--active'
        });
    }
}

export default SpyScroll;