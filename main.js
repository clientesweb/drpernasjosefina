document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navbarToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Testimonial slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    testimonialSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - testimonialSlider.offsetLeft;
        scrollLeft = testimonialSlider.scrollLeft;
    });

    testimonialSlider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    testimonialSlider.addEventListener('mouseup', () => {
        isDown = false;
    });

    testimonialSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - testimonialSlider.offsetLeft;
        const walk = (x - startX) * 2;
        testimonialSlider.scrollLeft = scrollLeft - walk;
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animation
    gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    // About section animation
    gsap.from('.about-content', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    // Services animation
    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '.services',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
    });

    // Testimonials animation
    gsap.from('.testimonial-card', {
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 80%'
        },
        opacity: 0,
        x: 100,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
    });

    // Contact form animation
    gsap.from('.contact-form, .contact-info', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
    });

    // WhatsApp button animation
    gsap.from('.whatsapp-button', {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
        delay: 1
    });

    // Update current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});

