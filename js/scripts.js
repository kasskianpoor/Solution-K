/*!
 * Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
    // Navbar shrink function
    // var navbarShrink = function () {
    //     const navbarCollapsible = document.body.querySelector('#mainNav');
    //     if (!navbarCollapsible) {
    //         return;
    //     }
    //     if (window.scrollY === 0) {
    //         navbarCollapsible.classList.remove('navbar-shrink')
    //     } else {
    //         navbarCollapsible.classList.add('navbar-shrink')
    //     }

    // };

    // Shrink the navbar
    // navbarShrink();

    // Shrink the navbar when page is scrolled
    // document.addEventListener("scroll", navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector("#mainNav");
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#mainNav",
            offset: 74,
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });

    console.log(window.location.hash);
    const efiModal = document.getElementById("portfolioModal1");
    if (window.location.hash == "#portfolioModal1") {
        efiModal.style.display = "block";
        efiModal.classList.remove("fade");
        console.log("window.location.hash");
    }
    const closeModal1 = document.getElementById("closeModal1");
    closeModal1.addEventListener("click", () => {
        efiModal.style.display = "none";
        efiModal.classList.add("fade");
    });
    const closeModal1x = document.getElementById("closeModal1x");
    closeModal1x.addEventListener("click", () => {
        efiModal.style.display = "none";
        efiModal.classList.add("fade");
    });
});
