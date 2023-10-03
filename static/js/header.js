// Add scroll event handler
$(window).scroll(function() {
    var header = $("header");
    if ($(this).scrollTop() > 0) {
        header.addClass("scrolled");
    } else {
        header.removeClass("scrolled");
    }
});


