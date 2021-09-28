$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#menu").toggleClass("show_list");
    $("#menu").fadeIn();

});