document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuButton && navLinks) {
        mobileMenuButton.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            mobileMenuButton.setAttribute('aria-expanded', 
                navLinks.classList.contains('show'));
            
            // Toggle between menu and x icon
            const menuIcon = mobileMenuButton.querySelector('i');
            if (navLinks.classList.contains('show')) {
                menuIcon.setAttribute('data-lucide', 'x');
            } else {
                menuIcon.setAttribute('data-lucide', 'menu');
            }
            lucide.createIcons();
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (navLinks.classList.contains('show') && 
            !event.target.closest('nav')) {
            navLinks.classList.remove('show');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            const menuIcon = mobileMenuButton.querySelector('i');
            menuIcon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        }
    });

    // Testimonial slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;

    function showNextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonialSlider.style.transform = `translateX(-${currentTestimonial * 100}%)`;
    }

    setInterval(showNextTestimonial, 5000);

    // WhatsApp notification
    const whatsappButton = document.querySelector('.whatsapp-button');
    const notification = whatsappButton.querySelector('.whatsapp-notification');

    whatsappButton.addEventListener('click', () => {
        notification.style.display = 'none';
    });

    // Update current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});

