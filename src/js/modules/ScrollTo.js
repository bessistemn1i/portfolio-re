class ScrollTo {
    constructor(object) {
        this.hire = document.querySelector(object.button);
        this.container = document.querySelector(object.container);
        this.scrollOpen();
        this.scrollHelper();
    }

    scrollHelper (scrollTo, scrollDuration) {

        //
        // Set a default for where we're scrolling to
        //
    
        if (typeof scrollTo === 'string' || typeof scrollTo === 'object') {
    
            // Assuming this is a selector we can use to find an element
            var scrollToObj = scrollTo;
    
            if (scrollToObj && typeof scrollToObj.getBoundingClientRect === 'function') {
                scrollTo = window.pageYOffset + scrollToObj.getBoundingClientRect().top;
            } else {
                throw 'error: No element found with the selector "' + scrollTo + '"';
            }
        }
    
        // Set this a bit higher
    
        var anchorHeightAdjust = 30;
        if (scrollTo > anchorHeightAdjust) {
            scrollTo = scrollTo - anchorHeightAdjust;
        }
    
        //
        // Set a default for the duration
        //
    
        if ( typeof scrollDuration !== 'number' || scrollDuration < 0 ) {
            scrollDuration = 1000;
        }
    
        // Declarations
    
        var cosParameter = (window.pageYOffset - scrollTo) / 2,
            scrollCount = 0,
            oldTimestamp = window.performance.now();
    
        function step(newTimestamp) {
    
            var tsDiff = newTimestamp - oldTimestamp;
    
            // Performance.now() polyfill loads late so passed-in timestamp is a larger offset
            // on the first go-through than we want so I'm adjusting the difference down here.
            // Regardless, we would rather have a slightly slower animation than a big jump so a good
            // safeguard, even if we're not using the polyfill.
    
            if (tsDiff > 100) {
                tsDiff = 30;
            }
    
            scrollCount += Math.PI / (scrollDuration / tsDiff);
    
            // As soon as we cross over Pi, we're about where we need to be
    
            if (scrollCount >= Math.PI) {
                return;
            }
    
            var moveStep = Math.round(scrollTo + cosParameter + cosParameter * Math.cos(scrollCount));
            window.scrollTo(0, moveStep);
            oldTimestamp = newTimestamp;
            window.requestAnimationFrame(step);
        }
    
        window.requestAnimationFrame(step);
    }

    scrollOpen() {
        let self = this;

        self.hire.addEventListener('click', () => {
            self.scrollHelper(self.container, 1000);
        });
    }
}

export default ScrollTo;