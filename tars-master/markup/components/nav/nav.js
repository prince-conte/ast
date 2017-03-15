var $openNavSearch = $('.js-open-search');
var $navSearch = $('#nav-search');


$openNavSearch.on('click', function () {

   if ($navSearch.is(':hidden')) {
       
       $navSearch.fadeIn(0);
       $openNavSearch.addClass('is-active');
       
   } 
    
   else {
       $navSearch.fadeOut(0);
       $openNavSearch.removeClass('is-active');
   }
    
    return false;
});

