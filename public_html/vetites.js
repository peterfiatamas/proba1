$(document).ready(function ($) {
    var timeout
    , current = 0
    , container = $('#slideshow')
    , slides = container.find('.slide');
    function start() {
        timeout = window.setTimeout(showNext, 3000);
    }

    /**  
     * Következő kép mutatása.  
     */
    function showNext() {
        slides.eq(current).removeClass('active');
        current += 1;
        if (current >= slides.length) {
            current = 0;
        }
        slides.eq(current).addClass('active');
        start();
    }

    container.mouseenter(function () {
        clearTimeout(timeout)
    }).mouseleave(function () {
        start();
    });
    start();
});