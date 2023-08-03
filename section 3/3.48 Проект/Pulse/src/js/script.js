// $ - библиотека jQuery
// slick - https://kenwheeler.github.io/slick/
$(document).ready(function(){
    $('.carousel__inner').slick({
        // infinite: true,
        // slidesToShow: 1,
        // slidesToScroll: 1
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slider/right.png"></button>',
        responsive: [
            {
                //для мобил чтобы появились точки вместо стрелочек
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
      });
  });