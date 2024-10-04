document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Reveal sections on scroll
    const revealSections = () => {
        const sections = document.querySelectorAll('.reveal');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealSections);
    revealSections(); // Initial check on page load

    // Animate heart on hover
    const heart = document.querySelector('.big-heart');
    heart.addEventListener('mouseenter', () => {
        heart.style.animation = 'pulse 0.5s infinite';
    });
    heart.addEventListener('mouseleave', () => {
        heart.style.animation = 'none';
    });

    // Animate mouse on hover
    const mouse = document.querySelector('.mouse');
    mouse.addEventListener('mouseenter', () => {
        mouse.style.transform = 'scale(1.1)';
        mouse.style.transition = 'transform 0.3s ease';
    });
    mouse.addEventListener('mouseleave', () => {
        mouse.style.transform = 'scale(1)';
    });
});