$('.js-index-grid').slick({
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
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
            
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
      
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



$('.js-about-1').on('click' , function(){
    
   $('.news-article__box-navigate-item').removeClass('is-active');
   $(this).addClass('is-active');
   $('.news-article__box--about-drop').removeClass('is-active');
   $('.js-about-drop-1').addClass('is-active');
    
    return false;
});

$('.js-about-2').on('click' , function(){
    
   $('.news-article__box-navigate-item').removeClass('is-active');
   $(this).addClass('is-active');
   $('.news-article__box--about-drop').removeClass('is-active');
   $('.js-about-drop-2').addClass('is-active');
    return false;
});

$('.js-about-3').on('click' , function(){
    
   $('.news-article__box-navigate-item').removeClass('is-active');
   $(this).addClass('is-active');
   $('.news-article__box--about-drop').removeClass('is-active');
   $('.js-about-drop-3').addClass('is-active');
    
    return false;
});