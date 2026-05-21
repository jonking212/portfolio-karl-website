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
