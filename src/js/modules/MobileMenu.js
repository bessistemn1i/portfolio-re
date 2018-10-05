class MobileMenu {
    constructor() {
        this.events();
    }

    events() {
        let menuIcon = document.querySelector('.mobile-icon');
        let mobileMenu = document.querySelector('.menu');
        let menuLinks = document.querySelectorAll('.menu__link');

        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('mobile-icon--active');
            mobileMenu.classList.toggle('menu--active');
        });

        for(let i = 0; i < menuLinks.length; i++) {
            let link = menuLinks[i];
            link.addEventListener('click', () => {
                menuIcon.classList.remove('mobile-icon--active');
                mobileMenu.classList.remove('menu--active');
            });
        }
    }
}

export default MobileMenu;