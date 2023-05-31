/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


document.addEventListener('DOMContentLoaded', function () {

    // Get the link and modal elements
    var phoneLink = document.getElementById("phoneLink");
    var modal = document.getElementById("myModal");
    var phoneNumberSpan = document.getElementById("phoneNumber");

    // Add a click event listener to the link
    phoneLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the link from navigating to a different page

        // Get the phone number from the data attribute
        var phoneNumber = phoneLink.getAttribute("data-phone-number");

        // Set the phone number in the modal
        phoneNumberSpan.textContent = phoneNumber;

        // Display the modal
        modal.style.display = "block";
    });

});
