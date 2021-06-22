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

$( ".item-km" ).click(function() {
    $(this).next().toggle();
    $(this).find('.arrow-percurso').toggleClass('ri-arrow-up-s-line');
    $(this).find('.arrow-percurso').toggleClass('ri-arrow-down-s-line');
    $( ".item-info a" ).attr('target','_blank');
});

