$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#menu").toggleClass("show_list");
    $("#menu").fadeIn();

});

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('solid');
        $('.navTrigger').addClass('solid');
        console.log("OK");
    } else {
        $('.nav').removeClass('solid');
    }
});