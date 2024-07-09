$(document).ready(function(){
    $('.carousel-inner').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        prevArrow: $('.prev'), 
        nextArrow: $('.next'), 
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '70px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.carousel').hover(
        function() {
            $('.prev').fadeIn();
            $('.next').fadeIn();
        },
        function() {
            $('.prev').fadeOut();
            $('.next').fadeOut();
        }
    );
});