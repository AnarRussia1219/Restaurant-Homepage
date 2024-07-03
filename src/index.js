import "./root.css";
import imgFood1 from "./assets/food-1.jpg";
import imgFood2 from "./assets/food-2.jpg";
import imgFood3 from "./assets/food-3.jpg";
import imgFood4 from "./assets/food-4.jpg";
import { hHome } from "./pages/home.js";

let companyData = {
    customers: "16472"
};
let selectedPage = 0;

loadPage();

// document.getElementById("page-main-contents").innerHTML = hHome;

function loadPage() {
    if (selectedPage === 0) {
        document.getElementById("page-main-contents").innerHTML = hHome;

        const elementHeroSectionCustomersNumberAnimated = document.getElementById("hero-section-customers-number-animated");
        // animation, do after 500 ms
        setTimeout(() => {
            // start with the initial value of the element set in html
            const b = Number(elementHeroSectionCustomersNumberAnimated.textContent);
            // console.log(b);
            for (let i = b; i < companyData.customers; i += 6) {
                setTimeout(() => {
                    elementHeroSectionCustomersNumberAnimated.textContent = i;
                }, 1);
            };
        }, 500);

        // animation
        const section3HeaderTextObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("opacity-0");
                    entry.target.classList.add("opacity-100");
                } else {
                    entry.target.classList.remove("opacity-100");
                    entry.target.classList.add("opacity-0");
                };
            });
        });
        section3HeaderTextObserver.observe(document.getElementById("section-3-header-text"));

        // animation
        const section3CardsObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("translate-x-[-100%]");
                    entry.target.classList.add("translate-x-[0%]");
                } else {
                    entry.target.classList.remove("translate-x-[0%]");
                    entry.target.classList.add("translate-x-[-100%]");
                };
            });
        });
        const section3Cards = document.querySelectorAll(".section-3-card");
        section3Cards.forEach((card) => {
            section3CardsObserver.observe(card);
        });

        // set the background images of the cards
        // console.log(imgFood1);
        document.getElementById("section-3-card-1").style.backgroundImage = `url(${imgFood1})`;
        document.getElementById("section-3-card-2").style.backgroundImage = `url(${imgFood2})`;
        document.getElementById("section-3-card-3").style.backgroundImage = `url(${imgFood3})`;
        document.getElementById("section-3-card-4").style.backgroundImage = `url(${imgFood4})`;
    };
};
