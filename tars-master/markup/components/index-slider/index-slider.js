$('.index-slider').slick({
  dots: true,
  infinite: true,
  arrows: false,    
  speed: 300,
  slidesToShow: 1
});

var slickOffset = $('.container').offset();
var slickLeft = slickOffset.left + 30;

$('.slick-dots').css('right' , slickLeft);
