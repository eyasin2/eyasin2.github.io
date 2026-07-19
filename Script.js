// Portfolio Website JavaScript

document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Website Loaded!");

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Welcome Message
    setTimeout(() => {
        console.log("Welcome to Eyasin's Portfolio!");
    }, 1000);
});
