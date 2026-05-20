// ═══ PROJECTS PAGE ANIMATIONS ═══
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    gsap.from('.projects-hero-content h1', { opacity: 0, y: 40, duration: 1.2, delay: 0.3, ease: 'expo.out' });
    gsap.from('.projects-hero-content p', { opacity: 0, y: 25, duration: 1.2, delay: 0.5, ease: 'expo.out' });

    gsap.utils.toArray('.project-detail-section').forEach(s => {
        gsap.from(s, { opacity: 0, y: 60, duration: 1.2, ease: 'expo.out',
            scrollTrigger: { trigger: s, start: 'top 80%', toggleActions: 'play none none reverse' } });
    });

    gsap.utils.toArray('.project-title').forEach(t => {
        gsap.from(t, { opacity: 0, x: -30, duration: 1, ease: 'expo.out',
            scrollTrigger: { trigger: t, start: 'top 85%', toggleActions: 'play none none reverse' } });
    });

    gsap.utils.toArray('.project-carousel').forEach(c => {
        gsap.from(c, { opacity: 0, scale: 0.96, duration: 1.2, ease: 'expo.out',
            scrollTrigger: { trigger: c, start: 'top 85%', toggleActions: 'play none none reverse' } });
    });

    gsap.utils.toArray('.tech-tags').forEach(container => {
        gsap.from(container.querySelectorAll('.tech-tag'), { opacity: 0, y: 10, duration: 0.4, stagger: 0.06, ease: 'power3.out',
            scrollTrigger: { trigger: container, start: 'top 88%', toggleActions: 'play none none reverse' } });
    });
});

// Carousel pause on hover
document.querySelectorAll('.project-carousel-list').forEach(c => {
    c.addEventListener('mouseenter', function () { this.style.animationPlayState = 'paused'; });
    c.addEventListener('mouseleave', function () { this.style.animationPlayState = 'running'; });
});

// Image error
document.querySelectorAll('.project-image').forEach(img => {
    img.addEventListener('error', function () {
        this.style.backgroundColor = '#181818';
        this.innerHTML = '<span style="color:#c8a97e;font-family:var(--font-mono);font-size:0.7rem;letter-spacing:2px">IMAGE NOT FOUND</span>';
    });
});
