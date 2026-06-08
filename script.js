document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");
    const iconMoon = document.querySelector(".icon-moon");
    const iconSun = document.querySelector(".icon-sun");

    // Check localStorage
    if (localStorage.getItem("theme") === "light") {
        document.documentElement.classList.add("light-mode");
        iconMoon.style.display = "none";
        iconSun.style.display = "inline";
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.documentElement.classList.toggle("light-mode");
            if (document.documentElement.classList.contains("light-mode")) {
                localStorage.setItem("theme", "light");
                iconMoon.style.display = "none";
                iconSun.style.display = "inline";
            } else {
                localStorage.setItem("theme", "dark");
                iconMoon.style.display = "inline";
                iconSun.style.display = "none";
            }
        });
    }

    // Navigation Scroll Effect
    const nav = document.querySelector("nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        });
        
        // Close menu on link click
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });
    }

    // Scroll Reveal Animation
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-in').forEach((el) => {
        observer.observe(el);
    });
});
