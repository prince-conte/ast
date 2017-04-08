var $mainHeight = $('.js-main').outerHeight();
var $tlFooter = $('.footer').offset();
var $topFooter = $tlFooter.top;


    $('#mapy').css('height' , $mainHeight);
    

$('.js-open-map').on('click', function () {
    $('.js-close-contect').css('visibility' , 'hidden');
    $('footer').css('top' , $topFooter);
    $('#mapy').addClass('contacts__mapy--open');
    $('.contacts__close-mapy').fadeIn(0);
    $('.ymaps-2-1-50-image').css('visibility' , 'visible');
    $('body').css('overflow' , 'hidden');
    $('html').css('overflow' , 'hidden');
		
    return false;
});

$('.contacts__close-mapy').on('click', function () {
    $('.js-close-contect').css('visibility' , 'visible');
    $('footer').css('top' , $topFooter);
    $('#mapy').removeClass('contacts__mapy--open');
    $('.contacts__close-mapy').fadeOut(0);
	  $('.ymaps-2-1-50-image').css('visibility' , 'hidden');
    $('body').css('overflow' , 'auto');
    $('html').css('overflow' , 'auto');
    return false;
});







    
    