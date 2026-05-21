// PARALLAX EFFECT
document.addEventListener("mousemove", (e) => {

    const blur1 = document.querySelector(".blur-1");
    const blur2 = document.querySelector(".blur-2");

    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;

    blur1.style.transform =
        `translate(${x * 40}px, ${y * 40}px)`;
    blur2.style.transform =
        `translate(-${x * 40}px, -${y * 40}px)`;
});

// SCROLL REVEAL ANIMATION
const aboutSection = document.querySelector(".about");

window.addEventListener("scroll", () => {

    const sectionTop = aboutSection.offsetTop - 500;

    if (window.scrollY >= sectionTop) {
        aboutSection.classList.add("show-about");
    }
});

// SERVICES HOVER EFFECT
const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(124,58,237,0.18),
                rgba(255,255,255,0.04) 45%
            )
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.background = "";
    });
});

// PORTFOLIO FILTER
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // ACTIVE BUTTON

        filterButtons.forEach((btn) => {
            btn.classList.remove("active-filter");
        });

        button.classList.add("active-filter");
        const filter = button.getAttribute("data-filter");

        // FILTER CARD

        portfolioCards.forEach((card) => {

            const category = card.getAttribute("data-category");

            if (filter === "all" || filter === category) {

                card.style.display = "block";

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "scale(1)";
                }, 100);

            } else {
                card.style.opacity = "0";
                card.style.transform = "scale(0.9)";

                setTimeout(() => {
                    card.style.display = "none";
                }, 300);
            }
        });
    });
});

// COUNTER ANIMATION
const counters = document.querySelectorAll(".counter");
const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");
        let count = 0;
        const increment = target / 80;

        const updateCounter = () => {
            count += increment;
            if (count < target) {
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
};

// START WHEN SECTION VISIBLE
const whySection = document.querySelector(".why-us");
let started = false;
window.addEventListener("scroll", () => {

    const sectionTop = whySection.offsetTop - 500;

    if (window.scrollY >= sectionTop && !started) {
        startCounter();
        started = true;
    }
});

// TECH CARD HOVER GLOW
const techCards = document.querySelectorAll(".tech-card");

techCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(124,58,237,0.18),
                rgba(255,255,255,0.04) 45%
            )
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.background = `rgba(255,255,255,0.04)`;
    });
});

// CONTACT FORM ANIMATION
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const button = document.querySelector(".contact-btn");

    button.innerHTML = `
        <i class="ri-check-line"></i>
        Pesan Terkirim
    `;

    button.style.opacity = "0.8";

    setTimeout(() => {
        button.innerHTML = `
            <i class="ri-send-plane-fill"></i>
            Kirim Pesan
        `;

        button.style.opacity = "1";
        contactForm.reset();
    }, 2500);
});

// FOOTER YEAR AUTO UPDATE
const footerYear = new Date().getFullYear();

const footerText = document.querySelector(".footer-bottom p");

footerText.innerHTML = `
    © ${footerYear} WebDev Studio. All Rights Reserved.
`;

// Up To Btn
document.addEventListener("DOMContentLoaded", () => {
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    if (!scrollTopBtn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollTopBtn.style.display = "flex";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});