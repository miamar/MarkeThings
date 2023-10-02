// Add scroll event handler
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $(".navbar").addClass("navbar-scrolled");
    } else {
      $(".navbar").removeClass("navbar-scrolled");
    }
  });