var $heightNav = $('nav').outerHeight();


$('.js-accordionJobs').on('click' , function(){

    if ($(this).closest('.jobs-info__vacancy').hasClass('is-active')) {
			
        $(this).closest('.jobs-info__vacancy').removeClass('is-active');
    }

    else {
        $(this).closest('.jobs-info__vacancy').addClass('is-active');
				var destination = $(this).closest('.js-accordionJobs').offset().top - $heightNav;
				jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
				return false;
    }

})