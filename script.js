// ═══════════════════════════════════════════════════════
// KARL ATANGANA — LUXURY EDITORIAL PORTFOLIO
// ═══════════════════════════════════════════════════════

const translations = {
    fr: {
        'nav.home': 'Accueil', 'nav.about': 'À Propos', 'nav.journey': 'Parcours',
        'nav.projects': 'Projets', 'nav.contact': 'Contact',
        'hero.title': 'Web Designer Créatif & Développeur Frontend',
        'hero.subtitle': 'Je crée des expériences digitales uniques qui marient design élégant et performance technique.',
        'hero.cta': 'Voir mes projets',
        'about.title': 'À Propos',
        'about.description1': 'Je m\'appelle Karl Atangana, j\'ai 20 ans et je suis passionné par le web design et le développement frontend depuis 2 ans.',
        'about.description2': 'Actuellement en école d\'ingénieur informatique à EPITA, je combine ma passion pour la création visuelle et mon expertise technique pour concevoir des interfaces modernes et performantes.',
        'about.description3': 'Mon approche allie sens esthétique pointu et maîtrise des technologies modernes pour créer des expériences utilisateur mémorables.',
        'education.title': 'Parcours Scolaire',
        'education.step1.title': 'Lycée Lakanal, Sceaux', 'education.step1.description': 'Terminale Générale',
        'education.step2.title': 'EPITA, Villejuif', 'education.step2.description': 'Diplôme d\'Ingénieur en Informatique',
        'projects.title': 'Mes Projets', 'projects.technologies': 'Technologies Utilisées',
        'projects.project1.subtitle': 'Plateforme moderne de location de véhicules',
        'projects.project1.description': 'Développement d\'une application web complète de location de voitures avec système de réservation en temps réel, gestion de flotte et interface administrateur. Design responsive et expérience utilisateur optimisée.',
        'projects.project1.slide1.title': 'Page d\'Accueil(hero section)', 'projects.project1.slide1.description': 'Design moderne avec système de recherche avancé',
        'projects.project1.slide2.title': 'Page d\'Accueil(section description)', 'projects.project1.slide2.description': 'description de l\'entreprise',
        'projects.project1.slide3.title': 'models de voitures', 'projects.project1.slide3.description': 'presentation des differents models de voitures',
        'projects.project1.slide4.title': 'description 2', 'projects.project1.slide4.description': 'Animations javascript avec des cartes',
        'projects.project1.slide5.title': 'Contact', 'projects.project1.slide5.description': 'effet de couleur avec le javascript',
        'projects.project2.subtitle': 'Site vitrine élégant pour restaurant gastronomique',
        'projects.project2.description': 'Création d\'une identité visuelle sophistiquée pour un restaurant haut de gamme. Intégration d\'un système de réservation, galerie photo animée et menu interactif.',
        'projects.project2.slide1.title': 'Page d\'Accueil', 'projects.project2.slide1.description': 'Hero section avec une approche seo-friendly',
        'projects.project2.slide2.title': 'valeurs du restaurant', 'projects.project2.slide2.description': '3 valeurs clés que tout restaurant doit posséder',
        'projects.project2.slide3.title': 'Description', 'projects.project2.slide3.description': 'Le restaurant est mis en valeur avec une description',
        'projects.project2.slide4.title': 'Specialités', 'projects.project2.slide4.description': 'les specialités du restaurant invitent le client à tester de nouvelles saveurs',
        'projects.project2.slide5.title': 'texte à propos', 'projects.project2.slide5.description': 'Une description de ce qui rend le restaurant unique',
        'projects.project3.subtitle': 'Boutique e-commerce mode et accessoires',
        'projects.project3.description': 'Développement d\'une plateforme e-commerce complète avec catalogue produits avancé, panier dynamique, système de paiement sécurisé et backoffice de gestion.',
        'projects.project3.slide1.title': 'hero section', 'projects.project3.slide1.description': 'présentation du site avec un model',
        'projects.project3.slide2.title': 'qualités', 'projects.project3.slide2.description': 'les qualites de l\'entreprise faits avec des illustrations',
        'projects.project3.slide3.title': 'featured product', 'projects.project3.slide3.description': 'Gallerie images sur les produits',
        'projects.project3.slide4.title': 'produits saisonniers', 'projects.project3.slide4.description': 'creation d\'une Animation pour tout les offres',
        'projects.project3.slide5.title': 'contact', 'projects.project3.slide5.description': 'Zone de contact et de newsletters',
        'projects.project4.subtitle': 'Site moderne pour café-restaurant',
        'projects.project4.description': 'Conception d\'un site web élégant pour un café-restaurant, mettant en valeur l\'ambiance chaleureuse et la carte des spécialités. Intégration de réservations en ligne et galerie photo immersive.',
        'projects.project4.slide1.title': 'Hero section', 'projects.project4.slide1.description': 'Design invitant avec ambiance café',
        'projects.project4.slide2.title': 'à propos', 'projects.project4.slide2.description': 'petite description',
        'projects.project4.slide3.title': 'Menu', 'projects.project4.slide3.description': 'Presentation du menu',
        'projects.project4.slide4.title': 'Avis', 'projects.project4.slide4.description': 'Avis avec une animation carrousel',
        'projects.project4.slide5.title': 'Gallery', 'projects.project4.slide5.description': 'Photo de differents plats',
        'contact.title': 'Travaillons Ensemble', 'contact.subtitle': 'Discutons de votre prochain projet',
        'footer.rights': 'Tous droits réservés.'
    },
    en: {
        'nav.home': 'Home', 'nav.about': 'About', 'nav.journey': 'Journey',
        'nav.projects': 'Projects', 'nav.contact': 'Contact',
        'hero.title': 'Creative Web Designer & Frontend Developer',
        'hero.subtitle': 'I create unique digital experiences that blend elegant design and technical performance.',
        'hero.cta': 'View my projects',
        'about.title': 'About Me',
        'about.description1': 'My name is Karl Atangana, I\'m 20 years old and I\'ve been passionate about web design and frontend development for 2 years.',
        'about.description2': 'Currently studying computer engineering at EPITA, I combine my passion for visual creation with my technical expertise to design modern and performant interfaces.',
        'about.description3': 'My approach combines sharp aesthetic sense and mastery of modern technologies to create memorable user experiences.',
        'education.title': 'Academic Journey',
        'education.step1.title': 'Lycée Lakanal, Sceaux', 'education.step1.description': 'General Baccalaureate',
        'education.step2.title': 'EPITA, Villejuif', 'education.step2.description': 'Computer Engineering Degree',
        'projects.title': 'My Projects', 'projects.technologies': 'Technologies Used',
        'projects.project1.subtitle': 'Modern vehicle rental platform',
        'projects.project1.description': 'Development of a complete car rental web application with real-time booking system, fleet management and admin interface. Responsive design and optimized user experience.',
        'projects.project1.slide1.title': 'Homepage(hero section)', 'projects.project1.slide1.description': 'Modern design with advanced search system',
        'projects.project1.slide2.title': 'Homepage(description section)', 'projects.project1.slide2.description': 'company description',
        'projects.project1.slide3.title': 'car models', 'projects.project1.slide3.description': 'presentation of different car models',
        'projects.project1.slide4.title': 'description 2', 'projects.project1.slide4.description': 'Javascript animations with cards',
        'projects.project1.slide5.title': 'Contact', 'projects.project1.slide5.description': 'color effect with javascript',
        'projects.project2.subtitle': 'Elegant showcase website for gourmet restaurant',
        'projects.project2.description': 'Creation of a sophisticated visual identity for a high-end restaurant. Integration of a reservation system, animated photo gallery and interactive menu.',
        'projects.project2.slide1.title': 'Homepage', 'projects.project2.slide1.description': 'Hero section with SEO-friendly approach',
        'projects.project2.slide2.title': 'restaurant values', 'projects.project2.slide2.description': '3 key values that every restaurant should have',
        'projects.project2.slide3.title': 'Description', 'projects.project2.slide3.description': 'The restaurant is highlighted with a description',
        'projects.project2.slide4.title': 'Specialties', 'projects.project2.slide4.description': 'the restaurant\'s specialties invite customers to try new flavors',
        'projects.project2.slide5.title': 'about text', 'projects.project2.slide5.description': 'A description of what makes the restaurant unique',
        'projects.project3.subtitle': 'Fashion and accessories e-commerce store',
        'projects.project3.description': 'Development of a complete e-commerce platform with advanced product catalog, dynamic shopping cart, secure payment system and management backoffice.',
        'projects.project3.slide1.title': 'hero section', 'projects.project3.slide1.description': 'website presentation with a model',
        'projects.project3.slide2.title': 'qualities', 'projects.project3.slide2.description': 'company qualities made with illustrations',
        'projects.project3.slide3.title': 'featured product', 'projects.project3.slide3.description': 'Image gallery of products',
        'projects.project3.slide4.title': 'seasonal products', 'projects.project3.slide4.description': 'creating an animation for all offers',
        'projects.project3.slide5.title': 'contact', 'projects.project3.slide5.description': 'Contact area and newsletters',
        'projects.project4.subtitle': 'Modern website for café-restaurant',
        'projects.project4.description': 'Design of an elegant website for a café-restaurant, highlighting the warm atmosphere and specialty menu. Integration of online reservations and immersive photo gallery.',
        'projects.project4.slide1.title': 'Hero section', 'projects.project4.slide1.description': 'Inviting design with café atmosphere',
        'projects.project4.slide2.title': 'about', 'projects.project4.slide2.description': 'brief description',
        'projects.project4.slide3.title': 'Menu', 'projects.project4.slide3.description': 'Menu presentation',
        'projects.project4.slide4.title': 'Reviews', 'projects.project4.slide4.description': 'Reviews with carousel animation',
        'projects.project4.slide5.title': 'Gallery', 'projects.project4.slide5.description': 'Photos of different dishes',
        'contact.title': 'Let\'s Work Together', 'contact.subtitle': 'Let\'s discuss your next project',
        'footer.rights': 'All rights reserved.'
    }
};

// ═══ CUSTOM CURSOR ═══
function initCursor() {
    if (window.innerWidth <= 768 || matchMedia('(pointer:coarse)').matches) return;
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    const follower = document.createElement('div');
    follower.className = 'cursor-follower';
    document.body.append(cursor, follower);

    let mx = 0, my = 0, fx = 0, fy = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx - 6 + 'px'; cursor.style.top = my - 6 + 'px'; });
    (function loop() { fx += (mx - fx) * 0.1; fy += (my - fy) * 0.1; follower.style.left = fx - 22 + 'px'; follower.style.top = fy - 22 + 'px'; requestAnimationFrame(loop); })();

    document.querySelectorAll('a, button, .project-carousel-item, .skill-tag, .tech-tag, .contact-item, .cta-button, .project-image, .hero-image-wrapper').forEach(el => {
        el.addEventListener('mouseenter', () => { follower.classList.add('active'); cursor.style.transform = 'scale(1.8)'; });
        el.addEventListener('mouseleave', () => { follower.classList.remove('active'); cursor.style.transform = 'scale(1)'; });
    });
}

// ═══ 3D TILT ═══
function initTilt() {
    if (window.innerWidth <= 768) return;
    document.querySelectorAll('.hero-image-wrapper, .timeline-item, .contact-item').forEach(el => {
        el.addEventListener('mousemove', e => {
            const r = el.getBoundingClientRect();
            const rx = ((e.clientY - r.top) / r.height - 0.5) * -6;
            const ry = ((e.clientX - r.left) / r.width - 0.5) * 6;
            el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.01,1.01,1.01)`;
            el.style.transition = 'transform 0.08s ease';
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
            el.style.transition = 'transform 0.6s cubic-bezier(0.25,1,0.5,1)';
        });
    });
}

// ═══ LIGHTBOX ═══
function initLightbox() {
    const lb = document.getElementById('lightbox');
    if (!lb) return;
    const img = document.getElementById('lightboxImage');
    const counter = document.getElementById('lightboxCounter');
    let imgs = [], idx = 0;

    function open(images, i) { imgs = images; idx = i; update(); lb.classList.add('active'); document.body.style.overflow = 'hidden'; gsap?.fromTo(lb, { opacity: 0 }, { opacity: 1, duration: 0.3 }); }
    function close() { gsap ? gsap.to(lb, { opacity: 0, duration: 0.2, onComplete: () => { lb.classList.remove('active'); document.body.style.overflow = ''; } }) : (lb.classList.remove('active'), document.body.style.overflow = ''); }
    function update() { img.src = imgs[idx].src; img.alt = imgs[idx].alt; counter.textContent = `${idx + 1} / ${imgs.length}`; }
    function next() { idx = (idx + 1) % imgs.length; anim('next'); }
    function prev() { idx = (idx - 1 + imgs.length) % imgs.length; anim('prev'); }
    function anim(dir) { if (!gsap) { update(); return; } gsap.to(img, { opacity: 0, x: dir === 'next' ? -30 : 30, duration: 0.15, onComplete: () => { update(); gsap.fromTo(img, { opacity: 0, x: dir === 'next' ? 30 : -30 }, { opacity: 1, x: 0, duration: 0.25 }); } }); }

    document.getElementById('lightboxClose').addEventListener('click', close);
    document.getElementById('lightboxNext').addEventListener('click', next);
    document.getElementById('lightboxPrev').addEventListener('click', prev);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') next(); if (e.key === 'ArrowLeft') prev(); });
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    document.addEventListener('click', e => {
        if (e.target.classList.contains('project-image')) {
            const section = e.target.closest('.project-detail-section');
            const all = Array.from(section.querySelectorAll('.project-image'));
            open(all, all.findIndex(i => i.src === e.target.src));
        }
    });
    [document.getElementById('lightboxClose'), document.getElementById('lightboxPrev'), document.getElementById('lightboxNext'), img].forEach(el => el.addEventListener('click', e => e.stopPropagation()));
}

// ═══ LANGUAGE ═══
function initLanguage() {
    const btns = document.querySelectorAll('.lang-btn');
    let lang = localStorage.getItem('preferredLang') || 'fr';
    apply(lang);
    btns.forEach(b => b.addEventListener('click', function () { lang = this.dataset.lang; apply(lang); localStorage.setItem('preferredLang', lang); }));

    function apply(l) {
        btns.forEach(b => b.classList.toggle('active', b.dataset.lang === l));
        const t = translations[l];
        document.querySelectorAll('[data-translate]').forEach(el => { const k = el.getAttribute('data-translate'); if (t[k]) el.textContent = t[k]; });
        document.documentElement.lang = l;
        const title = document.querySelector('title'), desc = document.querySelector('meta[name="description"]');
        if (l === 'en') { title.textContent = 'Karl Atangana - Creative Web Designer & Frontend Developer'; desc?.setAttribute('content', 'Karl Atangana, web designer and frontend developer.'); }
        else { title.textContent = 'Karl Atangana - Web Designer & Développeur Frontend Créatif'; desc?.setAttribute('content', 'Karl Atangana, web designer et développeur frontend.'); }
    }
}

// ═══ GSAP ANIMATIONS ═══
function initAnimations() {
    if (typeof gsap === 'undefined') { fallback(); return; }
    gsap.registerPlugin(ScrollTrigger);

    // Loading
    window.addEventListener('load', () => { gsap.to('.loading-bar', { width: '100%', duration: 0.6, onComplete: () => gsap.to('.loading-bar', { opacity: 0, duration: 0.3, delay: 0.2 }) }); });

    // Hero — cinematic stagger
    const hero = gsap.timeline({ defaults: { ease: 'expo.out' } });
    hero
        .to('.hero-label', { opacity: 1, y: 0, duration: 1, delay: 0.3 })
        .to('.hero h1', { opacity: 1, y: 0, duration: 1.4 }, '-=0.7')
        .to('.hero p', { opacity: 1, y: 0, duration: 1.2 }, '-=1')
        .to('.cta-button', { opacity: 1, y: 0, duration: 1 }, '-=0.8')
        .to('.hero-image', { opacity: 1, scale: 1, duration: 1.6, ease: 'power3.out' }, '-=1.4');

    // Parallax
    gsap.to('.hero-image', { yPercent: -12, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.5 } });

    // Sections
    gsap.utils.toArray('.section-title').forEach(t => gsap.to(t, { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: t, start: 'top 82%', toggleActions: 'play none none reverse' } }));
    gsap.utils.toArray('.about-text, .skills').forEach(el => gsap.to(el, { opacity: 1, y: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none reverse' } }));
    gsap.utils.toArray('.timeline').forEach(tl => gsap.to(tl, { opacity: 1, duration: 1, scrollTrigger: { trigger: tl, start: 'top 82%', toggleActions: 'play none none reverse' } }));
    gsap.utils.toArray('.timeline-item').forEach((item, i) => gsap.to(item, { opacity: 1, y: 0, duration: 1, delay: i * 0.15, ease: 'expo.out', scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none reverse' } }));
    gsap.utils.toArray('.project-detail-section').forEach((s, i) => gsap.to(s, { opacity: 1, y: 0, duration: 1.2, delay: i * 0.08, ease: 'expo.out', scrollTrigger: { trigger: s, start: 'top 80%', toggleActions: 'play none none reverse' } }));
    gsap.to('.contact-subtitle', { opacity: 1, y: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: '.contact', start: 'top 80%', toggleActions: 'play none none reverse' } });
    gsap.to('.contact-info', { opacity: 1, y: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: '.contact-info', start: 'top 85%', toggleActions: 'play none none reverse' } });

    // Header
    window.addEventListener('scroll', () => document.querySelector('header')?.classList.toggle('scrolled', window.scrollY > 60));
}

function fallback() {
    document.querySelectorAll('.hero-label, .hero h1, .hero p, .cta-button, .hero-image, .section-title, .about-text, .skills, .timeline, .timeline-item, .project-detail-section, .contact-subtitle, .contact-info').forEach(el => { el.style.opacity = '1'; el.style.transform = 'none'; });
}

// ═══ NAVIGATION ═══
function initNav() {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) { e.preventDefault(); const t = document.querySelector(href); if (t) { t.scrollIntoView({ behavior: 'smooth', block: 'start' }); history.pushState(null, null, href); } }
        });
    });
}

// ═══ CAROUSELS ═══
function initCarousels() {
    document.querySelectorAll('.project-carousel-track').forEach(track => { track.innerHTML += track.innerHTML; });
    adjustCarousel();
    window.addEventListener('resize', adjustCarousel);
    initLightbox();
}

function adjustCarousel() {
    const mobile = window.innerWidth <= 768;
    document.querySelectorAll('.project-carousel-track').forEach(t => { t.style.animationDuration = mobile ? '60s' : '50s'; });
}

// ═══ INIT ═══
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initAnimations();
    initNav();
    initCarousels();
    initCursor();
    initTilt();

    // Image error fallback
    document.querySelectorAll('.project-image').forEach(img => {
        img.addEventListener('error', function () {
            this.style.backgroundColor = '#181818';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.innerHTML = '<span style="color:#c8a97e;font-family:var(--font-mono);font-size:0.7rem;letter-spacing:2px">IMAGE NOT FOUND</span>';
        });
    });
});
