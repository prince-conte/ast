var $menuOpen = $('.js-menu-open');
var $menuClose = $('.js-menu-close');
var $mobileMenu = $('.js-mobile-menu');

$menuOpen.on('click', function () {
    
    $menuClose.fadeIn(0);
    $mobileMenu.fadeIn(0);
    
});

$menuClose.on('click', function () {
    
    $menuClose.fadeOut(0);
    $mobileMenu.fadeOut(0);
    
})