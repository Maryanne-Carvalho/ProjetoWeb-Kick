$(document).ready(function(){
    $('.carousel-inner').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        prevArrow: $('.prev'), // Use a classe .prev para a seta "Anterior"
        nextArrow: $('.next'), // Use a classe .next para a seta "Próxima"
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

    // Mostra as setas somente quando hover na área do carrossel
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