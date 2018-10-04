class MobileMenu {
    constructor() {
        this.events();
    }

    events() {
        let menuIcon = document.querySelector('.mobile-icon');
        let mobileMenu = document.querySelector('.main-nav__menu');
        let menuLinks = document.querySelectorAll('.main-nav__menu-link');

        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('mobile-icon--active');
            mobileMenu.classList.toggle('main-nav__menu--active');
        });

        for(let i = 0; i < menuLinks.length; i++) {
            let link = menuLinks[i];
            link.addEventListener('click', () => {
                menuIcon.classList.remove('mobile-icon--active');
                mobileMenu.classList.remove('main-nav__menu--active');
            });
        }
    }
}

export default MobileMenu;