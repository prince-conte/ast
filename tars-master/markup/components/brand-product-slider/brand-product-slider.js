
$('.js-brand-product-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
	prevArrow: '<i data-role="none" class="slick-nav slick-prev" aria-label="Previous" tabindex="0" role="button"></i>',
  nextArrow: '<i data-role="none" class="slick-nav slick-next" aria-label="Next" tabindex="0" role="button"></i>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});