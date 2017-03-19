var $heightNav = $('nav').outerHeight();


$('.js-accordionJobs').on('click' , function(){

    if ($(this).closest('.js-accordionJobs').hasClass('is-active')) {
			
        $(this).closest('.js-accordionJobs').removeClass('is-active');
    }

    else {
        $(this).closest('.js-accordionJobs').addClass('is-active');
				var destination = $(this).closest('.js-accordionJobs').offset().top - $heightNav;
				jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
				return false;
    }

})