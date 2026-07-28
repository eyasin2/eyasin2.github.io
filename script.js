
// Premium Portfolio Script

document.addEventListener("DOMContentLoaded", () => {

    // Smooth Fade Animation
    const items = document.querySelectorAll(".card, .gallery img, section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.15
    });

    items.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(50px)";
        item.style.transition = "all .8s ease";
        observer.observe(item);
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Profile Hover Effect
    const profile = document.querySelector(".profile");

    if(profile){
        profile.addEventListener("mouseenter",()=>{
            profile.style.transform="scale(1.06)";
        });

        profile.addEventListener("mouseleave",()=>{
            profile.style.transform="scale(1)";
        });
    }

});

console.log("Premium Portfolio Loaded Successfully");
