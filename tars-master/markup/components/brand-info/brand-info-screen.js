 $('.js-brand-info-screen').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.js-brand-info-screen-nav'
});
$('.js-brand-info-screen-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.js-brand-info-screen',
  focusOnSelect: true
});