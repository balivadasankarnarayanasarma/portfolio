// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        if(navLinks.classList.contains('active')) {
             navLinks.style.display = 'flex';
             navLinks.style.flexDirection = 'column';
             navLinks.style.position = 'absolute';
             navLinks.style.top = '100%';
             navLinks.style.left = '0';
             navLinks.style.width = '100%';
             navLinks.style.background = 'var(--bg-primary)';
             navLinks.style.padding = '2rem';
             navLinks.style.borderBottom = '1px solid var(--border)';
        } else {
            navLinks.style.display = '';
        }
    });
}

// Close menus on outside click
document.addEventListener('click', () => {
    if (navLinks) navLinks.classList.remove('active');
    if (themeMenu) themeMenu.classList.remove('active');
});

// Theme Management
const themeToggle = document.getElementById('theme-toggle');
const themeMenu = document.getElementById('theme-menu');
const themeBtns = document.querySelectorAll('.theme-btn');

if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        themeMenu.classList.toggle('active');
    });
}

function setTheme(theme) {
    if (theme === 'default') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.removeItem('theme');
    } else {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }
    
    themeBtns.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-theme') === theme);
    });
}

themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-theme');
        setTheme(theme);
    });
});

// Initialize theme
const savedTheme = localStorage.getItem('theme') || 'default';
setTheme(savedTheme);

// GSAP Animations for Professional Reveal
gsap.registerPlugin(ScrollTrigger);

// Hero Reveal
gsap.from('.hero-content > *', {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power3.out"
});

gsap.from('.hero-image', {
    x: 60,
    scale: 0.9,
    opacity: 0,
    duration: 1.2,
    delay: 0.4,
    ease: "power3.out"
});

// Section Title Reveal
const sectionTitles = document.querySelectorAll('.section-title-box');
sectionTitles.forEach(box => {
    gsap.from(box, {
        scrollTrigger: {
            trigger: box,
            start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
});

// Card Reveal
const cards = document.querySelectorAll('.card, .skill-card, .timeline-item');
cards.forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 90%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
});

// Progress Bar Animation
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    const fill = card.querySelector('.progress-fill');
    const targetWidth = fill.style.width;
    fill.style.width = '0'; // Set to 0 initially
    
    gsap.to(fill, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
        },
        width: targetWidth,
        duration: 1.5,
        delay: 0.2,
        ease: "power2.out"
    });
});

// Form Submission (Mock)
const contactForm = document.querySelector('.contact-form-pro');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerText;
        btn.innerText = 'Message Sent!';
        btn.disabled = true;
        btn.style.backgroundColor = '#10b981';
        
        setTimeout(() => {
            contactForm.reset();
            btn.innerText = originalText;
            btn.disabled = false;
            btn.style.backgroundColor = '';
        }, 3000);
    });
}


