class ButtonUp {
    constructor() {
        this.events();
    }

    events() {
        let btnUp = document.querySelector('.footer__up');
        let btnHire = document.querySelector('.header__bottom-hire');

        function scrollToTop(scrollDuration) {
            var scrollStep = -window.scrollY / (scrollDuration / 15),
                scrollInterval = setInterval(function(){
                if ( window.scrollY != 0 ) {
                    window.scrollBy( 0, scrollStep );
                }
                else clearInterval(scrollInterval); 
            },15);
        }
        
        btnUp.addEventListener('click', () => {
           scrollToTop(300);
        });

        btnHire.addEventListener('click', () => {
            console.log('click hire');
        });
    }
}

export default ButtonUp;