document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Hero slider
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-arrow.prev');
    const nextButton = document.querySelector('.slider-arrow.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);

    // Instagram feed (mock data)
    const instagramFeed = document.getElementById('instagramFeed');
    const mockPosts = [
        { image: 'instagram-1.jpg', caption: 'Consejos para manejar el estrés #SaludMental' },
        { image: 'instagram-2.jpg', caption: 'La importancia del sueño en nuestra salud mental' },
        { image: 'instagram-3.jpg', caption: 'Ejercicios de mindfulness para el día a día' },
        { image: 'instagram-4.jpg', caption: 'Cómo mejorar tus relaciones interpersonales' },
        { image: 'instagram-5.jpg', caption: 'Técnicas de relajación para combatir la ansiedad' },
        { image: 'instagram-6.jpg', caption: 'El poder de la terapia en el crecimiento personal' }
    ];

    mockPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'instagram-post';
        postElement.innerHTML = `
            <img src="${post.image}" alt="${post.caption}">
            <p>${post.caption}</p>
        `;
        instagramFeed.appendChild(postElement);
    });

    // Update current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
