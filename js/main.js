$(document).ready(function(){
  $('.reviews__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: false,
    dots: true,
    arrows: false,
    responsive: [
    {
      breakpoint: 1106,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    ]
  });

  $('.header__burger').on('click', function(){
  	$('.header__menu').slideToggle();
  });
});