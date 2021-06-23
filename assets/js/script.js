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
$("#main-content").click(function() {
    $(".menu").hide();
    $( ".hamburger" ).removeClass("is-active");
});

$("#contactos").click(function() {
    $(".menu").hide();
    $( ".hamburger" ).removeClass("is-active");
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

