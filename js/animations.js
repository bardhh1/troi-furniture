document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.fade-up');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}); 