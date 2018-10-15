import MobileMenu from "./modules/MobileMenu";
import ScrollTo from "./modules/ScrollTo";
import ViewportCheck from "./modules/ViewportCheck";
import ProgressBar from "./modules/ProgressBar";
import Count from "./modules/Counter";
import elementCheck from "./modules/ElementCheck";
import SpyScroll from "./modules/SpyScroll";

new MobileMenu();

new ScrollTo({
    button: '.footer__up',
    container: '#home'
});

new ViewportCheck({
    el: ['.skills', '.facts'],
    callback: function() {
        new elementCheck({
            element: '.skills',
            innerCallback: function() {
                const html = new ProgressBar({
                    el: '#skill__html',
                    finish: 100,
                    background: '#272526'
                });
                const css = new ProgressBar({
                    el: '#skill__css',
                    finish: 100,
                    background: '#272526'
                });
                const js = new ProgressBar({
                    el: '#skill__javascript',
                    finish: 80,
                    background: '#FEB031'
                });
                const jq = new ProgressBar({
                    el: '#skill__jquery',
                    finish: 90,
                    background: '#156AAB'
                });
                const photoshop = new ProgressBar({
                    el: '#skill__photoshop',
                    finish: 85,
                    background: '#157EBA'
                });
                const illustrator = new ProgressBar({
                    el: '#skill__illustrator',
                    finish: 70,
                    background: '#FE7827'
                });
            }
        });

        new elementCheck({
            element: '.facts',
            innerCallback: function() {
                const exp = new Count({
                    el: '#experience',
                    finish: 3
                });
                const prjects = new Count({
                    el: '#facts__time',
                    finish: 7
                });
                const responsibility = new Count({
                    el: '#facts__responsibility',
                    finish: 100
                });
            }
        });
    }
});

new SpyScroll();