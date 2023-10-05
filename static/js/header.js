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