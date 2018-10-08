import MobileMenu from "./modules/MobileMenu";
import ScrollTo from "./modules/ScrollTo";


new MobileMenu();

new ScrollTo({
    button: '.header__bottom-hire',
    container: '.footer'
});

new ScrollTo({
    button: '.footer__up',
    container: '#home'
});