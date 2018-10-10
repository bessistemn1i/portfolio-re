import MobileMenu from "./modules/MobileMenu";
import ScrollTo from "./modules/ScrollTo";
import ViewportCheck from "./modules/ViewportCheck";
import ProgressBar from "./modules/ProgressBar";

new MobileMenu();

new ScrollTo({
    button: '.header__bottom-hire',
    container: '.footer'
});

new ScrollTo({
    button: '.footer__up',
    container: '#home'
});

new ViewportCheck({
    elem: '.skills',
    callback: function() {
        const testing7 = new Testing7({
            el: '#skill__html',
            finish: 40
        });
    }
})