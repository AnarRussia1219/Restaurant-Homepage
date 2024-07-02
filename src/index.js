import "./root.css";

let companyData = {
    customers: "16472"
};

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