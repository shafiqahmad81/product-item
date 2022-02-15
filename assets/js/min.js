$(document).ready(function () {

    $('.testimonial').owlCarousel({
        items: 3,
        margin: 30,
        nav: false,
        loop: true,
        dots: true,
        
    });

    $(".product-list").masonry();

    $('.homepage-slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        navText: ['<i class="zmdi zmdi-arrow-left"></i>', '<i class="zmdi zmdi-arrow-right"></i>']
    });
    $('.product-promotion').owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
    });

    $(".menu-tigger").on("click", function () {
        $(".off-canver-menu, .off-canver-overlay").addClass("active");

    });

    $(".menu-close, .off-canver-overlay").on("click", function () {
        $(".off-canver-menu, .off-canver-overlay").removeClass("active");
    });
    
    $(".search-tigger").on("click", function () {
        $(".check").addClass("active").fadeIn("slow");

    });
    $(".search-close-btn").on("click", function () {
        $(".check").removeClass("active").fadeOut();

    });
    




});



