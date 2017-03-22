$('.js-photo-grid').imagesLoaded( function() {
    $('.js-photo-grid').masonry({
        columnWidth: '.grid-sizer',
        itemSelector: '.photo-grid__item'
    });
});