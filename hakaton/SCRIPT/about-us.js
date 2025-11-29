// Counter animation
        function animateCounter(el) {
            const target = parseInt(el.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    
                    clearInterval(timer);
                } else {
                    if (target >= 1000) {
                        el.textContent = Math.floor(current / 1000) + 'K+';
                    } else {
                        el.textContent = Math.floor(current) + '%';
                    }
                }
            }, 16);
        }

        // Intersection Observer for stats
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.stat-number');
                    counters.forEach(counter => animateCounter(counter));
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const statsSection = document.querySelector('.stats');
        observer.observe(statsSection);

        // Add hover effect to feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 10px 30px rgba(100, 181, 246, 0.3)';
            });
            card.addEventListener('mouseleave', function() {
                this.style.boxShadow = 'none';
            });
        });                 
        // Counter animation
function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            // SON DƏYƏR – yalnız + 
            if (target >= 1000) {
                el.textContent = (target / 1000) + 'K+';
            } else {
                el.textContent = target + '+';
            }
            clearInterval(timer);
        } else {
            // Animasiyanın gedişi
            if (target >= 1000) {
                el.textContent = Math.floor(current / 1000) + 'K+';
            } else {
                el.textContent = Math.floor(current) + '+';
            }
        }
    }, 16);
}
