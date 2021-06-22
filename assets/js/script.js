$( ".hamburger" ).click(function() {
    // Toggle class "is-active"
    $( ".hamburger" ).toggleClass("is-active");
    $(".menu").toggle();
    // Do something else, like open/close menu
});
$( ".more-info" ).click(function() {
    // Toggle class "is-active"
    $(".mais-info").toggleClass('hidden');
    // Do something else, like open/close menu
});


$( ".info-close" ).click(function() {
    // Toggle class "is-active"
    $(".mais-info").toggleClass('hidden');
    // Do something else, like open/close menu
});
