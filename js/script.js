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

    //aos animation
    AOS.init({
        duration: 1000,
        delay: 300,
    });


})

//form validation

var user_name = document.getElementById("name");
var user_email = document.getElementById("email");
var user_sub = document.getElementById("sub");
var return_val = 1;

function Validation() {
    if (user_name.value == "") {
        document.getElementById("nameError").innerHTML = "* Please Enter Your Name";
        return_val = 0;
    } else {
        document.getElementById("nameError").innerHTML = "";
        return_val = 1;
    }
    if (user_email.value == "") {
        document.getElementById("emailError").innerHTML = "* Please Enter Your Email";
        return_val = 0;
    } else {
        document.getElementById("emailError").innerHTML = "";
        return_val = 1;
    }
    if (user_sub.value == "") {
        document.getElementById("subError").innerHTML = "* Please Enter Your Subject";
        return_val = 0;
    } else {
        document.getElementById("subError").innerHTML = "";
        return_val = 1;
    }
    if (return_val) {
        return true;
    } else {
        return false;
    }
}