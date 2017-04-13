var $popupClose = $('.js-popup-close');
var $popupOpen = $('.js-popup-open');
var $popupFade = $('.popup-fade');
var $popupBlock = $('.js-popup-block');

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
e = e || window.event;
if (e.preventDefault)
e.preventDefault();
e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
if (keys[e.keyCode]) {
preventDefault(e);
return false;
}
}

function disableScroll() {
if (window.addEventListener) // older FF
window.addEventListener('DOMMouseScroll', preventDefault, false);
window.onwheel = preventDefault; // modern standard
window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
window.ontouchmove = preventDefault; // mobile
document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
if (window.removeEventListener)
window.removeEventListener('DOMMouseScroll', preventDefault, false);
window.onmousewheel = document.onmousewheel = null;
window.onwheel = null;
window.ontouchmove = null;
document.onkeydown = null;
}
function popupCloseFunction() {
        $popupBlock.fadeOut(500);
        $popupFade.delay(500).fadeOut(500);
        enableScroll();    
};


function popupOpenFunction() {

    $popupFade.fadeIn(500);
    $popupBlock.delay(500).fadeIn(500);
    disableScroll();
}

$popupClose.on('click', function () {
    popupCloseFunction();
    return false;
});
 
$popupOpen.on('click', function () {
    popupOpenFunction();
    return false;
});
               



