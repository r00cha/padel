document.addEventListener('DOMContentLoaded', function () {
    // Part 1: Toggle 'active' class on clicked nav links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Part 2: Hero section text fade-in animation
    window.onload = function () {
        // Wait for the entire page to finish loading
        const preloader = document.getElementById('preloader');
        
        // Hide the preloader
        preloader.style.display = 'none';
    
        // Existing hero content fade-in animation code (if any) can go here
        const heroTitle = document.querySelector('.hero-content h1');
        const heroText = document.querySelector('.hero-content p');
        const heroButton = document.querySelector('.hero-content .hero-button');
    
        setTimeout(() => {
            heroTitle.classList.add('animate');
        }, 300); // Delay for H1
    
        setTimeout(() => {
            heroText.classList.add('animate');
        }, 900); // Delay for P
    
        setTimeout(() => {
            heroButton.classList.add('animate');
        }, 1500); // Delay for Button
    };
    
    // Part 3: Cards fade-in animation when .about section comes into view
    const aboutSection = document.querySelector('.about'); // Select the .about section
    const cards = document.querySelectorAll('.about .card'); // Select all cards within .about

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // When the .about section comes into view, animate the cards
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('fade-in-left');
                    }, 300 * (index + 1)); // Delay for each card based on its index
                });
                observer.unobserve(entry.target); // Stop observing once animation has started
            }
        });
    }, { threshold: 0.3 }); // Trigger when 10% of the .about section is visible

    // Start observing the .about section
    observer.observe(aboutSection);
});
