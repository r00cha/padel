// Function to toggle 'active' class on clicked nav links
document.addEventListener('DOMContentLoaded', function () {
    // Select all <a> elements within the <nav>
    const navLinks = document.querySelectorAll('nav a');

    // Add click event listener to each <a> element
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Remove 'active' class from all <a> elements
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Add 'active' class to the clicked <a> element
            this.classList.add('active');
        });
    });
});
