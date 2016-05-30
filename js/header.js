$(function () {
    $('.header-nav-link').click(function () {
        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: ($(id).offset().top - 100)
        }, 500);
        return false;
    });
});

$(function () {
    $('.button').click(function () {
        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: ($(id).offset().top - 100)
        }, 500);
        return false;
    });
});
