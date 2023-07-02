$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 4, 
        margin: 20, 
        loop: true, 
        nav: false,
        dots: true,
        dotsEach: true,
        responsive: {
            0: {
                items: 1 
            },
            769: {
                items: 2 
            },
            1024: {
                items: 4 
            }
        }
    });
});