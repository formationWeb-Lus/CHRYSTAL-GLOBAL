/*==========================================
        MENU MOBILE PREMIUM
===========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".menu-overlay");
const menuIcon = menuBtn.querySelector("i");

/* Ouvrir le menu */

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");

    if (navbar.classList.contains("active")) {

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

        document.body.style.overflow = "hidden";

    } else {

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

        document.body.style.overflow = "auto";

    }

});

/* Fermer avec l'overlay */

overlay.addEventListener("click", () => {

    navbar.classList.remove("active");
    overlay.classList.remove("active");

    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");

    document.body.style.overflow = "auto";

});

/* Fermer après avoir cliqué sur un lien */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");
        overlay.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

        document.body.style.overflow = "auto";

    });

});

/*==========================================
        HEADER AU SCROLL
===========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#071C38";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(7,28,56,.95)";
        header.style.boxShadow = "none";

    }

});