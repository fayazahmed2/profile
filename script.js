// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handler (you can replace with your own backend logic)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been sent!');
    // Form submission logic can go here
});
