$(function() {
    $(".nav-btn").click(function() {
        $(".nav-header ul").slideToggle()
    })
    $('.home-slider .owl-carousel').owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        margin: 0,
        nav: true,

    })

    //team carousel
    $('.team .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        margin: 50,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2,
            },
            992: {
                items: 3
            }


        }
    })

    //scroll up to top
    $.scrollUp({
        scrollImg: true,
        topDistance: '300',
        topSpeed: 1000,
    });

})