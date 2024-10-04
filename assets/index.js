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

    // Rain effect
    const rainContainer = document.querySelector('.rain');
    const createRaindrop = () => {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${Math.random() * 100}%`;
        raindrop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
        raindrop.style.opacity = Math.random() * 0.3 + 0.2;
        rainContainer.appendChild(raindrop);

        setTimeout(() => {
            raindrop.remove();
        }, 2000);
    };

    setInterval(createRaindrop, 20);

    // Moving doodles
    const doodlesContainer = document.querySelector('.doodles-container');
    const doodlesSVGs = [
        '<svg width="50" height="50" viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" fill="none" stroke="#4a90e2" stroke-width="2"/></svg>',
        '<svg width="50" height="50" viewBox="0 0 50 50"><rect x="10" y="10" width="30" height="30" fill="none" stroke="#4a90e2" stroke-width="2"/></svg>',
        '<svg width="50" height="50" viewBox="0 0 50 50"><polygon points="25,5 45,40 5,40" fill="none" stroke="#4a90e2" stroke-width="2"/></svg>'
    ];

    const createDoodle = () => {
        const doodle = document.createElement('div');
        doodle.classList.add('doodle');
        doodle.innerHTML = doodlesSVGs[Math.floor(Math.random() * doodlesSVGs.length)];
        doodle.style.left = `${Math.random() * 100}%`;
        doodle.style.top = `${Math.random() * 100}%`;
        doodle.style.animation = `float ${3 + Math.random() * 2}s ease-in-out infinite`;
        doodlesContainer.appendChild(doodle);
    };

    for (let i = 0; i < 10; i++) {
        createDoodle();
    }

    // Animate heart on hover
    const heart = document.querySelector('.big-heart');
    heart.addEventListener('mouseenter', () => {
        heart.style.transform = 'scale(1.1)';
        heart.style.transition = 'transform 0.3s ease';
    });
    heart.addEventListener('mouseleave', () => {
        heart.style.transform = 'scale(1)';
    });

    // Animate Shin-chan on hover
    const sinchan = document.querySelector('.sinchan');
    sinchan.addEventListener('mouseenter', () => {
        sinchan.style.transform = 'rotate(10deg)';
        sinchan.style.transition = 'transform 0.3s ease';
    });
    sinchan.addEventListener('mouseleave', () => {
        sinchan.style.transform = 'rotate(0deg)';
    });
});