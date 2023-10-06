// Add scroll event handler
$(window).scroll(function() {
    var header = $("header");
    if ($(this).scrollTop() > 0) {
        header.addClass("scrolled");
    } else {
        header.removeClass("scrolled");
    }
});

// Add an event listener to each nav-link to close the navbar when clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarNav = document.querySelector('.navbar-collapse');
        if (navbarToggler && navbarNav) {
            navbarToggler.classList.add('collapsed');
            navbarNav.classList.remove('show');
        }
    });
});

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a.nav-item.nav-link").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Add active class to clicked link
        $("a.nav-item.nav-link").removeClass("active");
        $(this).addClass("active");
  
        // Animate scroll
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800, // Animation duration in milliseconds
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      }
    });
  
    // Add mouse enter and mouse leave event listeners to sections
    $("div").on("mouseenter", function () {
      var sectionId = $(this).attr("id");
      var correspondingNavLink = $('a.nav-item.nav-link[href="#' + sectionId + '"]');
      correspondingNavLink.addClass("active");
    }).on("mouseleave", function () {
      var sectionId = $(this).attr("id");
      var correspondingNavLink = $('a.nav-item.nav-link[href="#' + sectionId + '"]');
      correspondingNavLink.removeClass("active");
    });
  });
  