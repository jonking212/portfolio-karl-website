// ═══ KARL ATANGANA — CINEMATIC GALLERY PORTFOLIO ═══

const translations={
fr:{'nav.home':'Accueil','nav.about':'À Propos','nav.journey':'Parcours','nav.projects':'Projets','nav.contact':'Contact',
'hero.greeting':'Bonjour, je suis','hero.role':'Web Designer & Développeur Frontend','hero.desc':'Je crée des expériences digitales uniques qui marient design élégant et performance technique.','hero.cta':'Voir mes projets','hero.cta2':'Me contacter',
'about.title':'À Propos','about.p1':'Je m\'appelle Karl Atangana, j\'ai 20 ans et je suis passionné par le web design et le développement frontend depuis 2 ans.','about.p2':'Actuellement en école d\'ingénieur informatique à EPITA, je combine ma passion pour la création visuelle et mon expertise technique pour concevoir des interfaces modernes et performantes.','about.p3':'Mon approche allie sens esthétique pointu et maîtrise des technologies modernes pour créer des expériences utilisateur mémorables.',
'edu.title':'Parcours Scolaire','edu.s1':'Lycée Lakanal, Sceaux','edu.s1d':'Terminale Générale','edu.s2':'EPITA, Villejuif','edu.s2d':'Diplôme d\'Ingénieur en Informatique',
'proj.title':'Mes Projets','proj.tech':'Stack Technique',
'proj.1s':'Plateforme moderne de location de véhicules','proj.1d':'Développement d\'une application web complète de location de voitures avec système de réservation en temps réel, gestion de flotte et interface administrateur.',
'proj.2s':'Site vitrine pour restaurant gastronomique','proj.2d':'Création d\'une identité visuelle sophistiquée pour un restaurant haut de gamme. Intégration d\'un système de réservation, galerie photo animée et menu interactif.',
'proj.3s':'Boutique e-commerce mode et accessoires','proj.3d':'Développement d\'une plateforme e-commerce complète avec catalogue produits avancé, panier dynamique, système de paiement sécurisé et backoffice de gestion.',
'proj.4s':'Site moderne pour café-restaurant','proj.4d':'Conception d\'un site web élégant pour un café-restaurant, mettant en valeur l\'ambiance chaleureuse et la carte des spécialités.',
'contact.title':'Travaillons Ensemble','contact.sub':'Discutons de votre prochain projet','footer.rights':'Tous droits réservés.'},
en:{'nav.home':'Home','nav.about':'About','nav.journey':'Journey','nav.projects':'Projects','nav.contact':'Contact',
'hero.greeting':'Hello, I am','hero.role':'Web Designer & Frontend Developer','hero.desc':'I create unique digital experiences that blend elegant design and technical performance.','hero.cta':'View my projects','hero.cta2':'Get in touch',
'about.title':'About Me','about.p1':'My name is Karl Atangana, I\'m 20 and passionate about web design and frontend development for 2 years.','about.p2':'Currently studying computer engineering at EPITA, I combine my passion for visual creation with technical expertise to design modern, performant interfaces.','about.p3':'My approach combines sharp aesthetic sense and mastery of modern technologies to create memorable user experiences.',
'edu.title':'Academic Journey','edu.s1':'Lycée Lakanal, Sceaux','edu.s1d':'General Baccalaureate','edu.s2':'EPITA, Villejuif','edu.s2d':'Computer Engineering Degree',
'proj.title':'My Projects','proj.tech':'Tech Stack',
'proj.1s':'Modern vehicle rental platform','proj.1d':'Development of a complete car rental web app with real-time booking, fleet management and admin interface.',
'proj.2s':'Elegant gourmet restaurant website','proj.2d':'Creation of a sophisticated visual identity for a high-end restaurant with reservation system and interactive menu.',
'proj.3s':'Fashion e-commerce store','proj.3d':'Complete e-commerce platform with advanced catalog, dynamic cart, secure payment and management backoffice.',
'proj.4s':'Modern café-restaurant website','proj.4d':'Elegant website for a café-restaurant, highlighting warm atmosphere and specialty menu.',
'contact.title':'Let\'s Work Together','contact.sub':'Let\'s discuss your next project','footer.rights':'All rights reserved.'}
};

// Preloader
window.addEventListener('load',()=>{setTimeout(()=>document.getElementById('preloader')?.classList.add('done'),2300)});

// Header scroll
window.addEventListener('scroll',()=>{document.getElementById('header')?.classList.toggle('scrolled',scrollY>60)});

// Smooth scroll
document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
        a.addEventListener('click',e=>{e.preventDefault();const t=document.querySelector(a.getAttribute('href'));if(t)t.scrollIntoView({behavior:'smooth',block:'start'})});
    });
});

// Reveal
const rvObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis')})},{threshold:.1,rootMargin:'0px 0px -40px 0px'});
document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('.rv').forEach(el=>rvObs.observe(el))});

// Hero photo reveal
window.addEventListener('load',()=>{setTimeout(()=>document.getElementById('heroPhoto')?.classList.add('vis'),2500)});

// Hero entrance
window.addEventListener('load',()=>{
    setTimeout(()=>{
        ['.hero-tag','.hero-greeting','.hero-name','.hero-role','.hero-desc','.hero-actions'].forEach((s,i)=>{
            const el=document.querySelector(s);
            if(el)setTimeout(()=>{el.style.transition='opacity 1.1s cubic-bezier(.25,1,.5,1),transform 1.1s cubic-bezier(.25,1,.5,1)';el.style.opacity='1';el.style.transform='translateY(0)'},i*150);
        });
    },2400);
});

// Carousels — duplicate for infinite scroll
document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.project-carousel-track').forEach(track=>{track.innerHTML+=track.innerHTML});
});

// Language switcher
document.addEventListener('DOMContentLoaded',()=>{
    const btns=document.querySelectorAll('.lang-btn');
    let lang=localStorage.getItem('lang')||'fr';
    apply(lang);
    btns.forEach(b=>b.addEventListener('click',function(){lang=this.dataset.lang;apply(lang);localStorage.setItem('lang',lang)}));
    function apply(l){
        btns.forEach(b=>b.classList.toggle('active',b.dataset.lang===l));
        const t=translations[l];
        document.querySelectorAll('[data-t]').forEach(el=>{const k=el.dataset.t;if(t[k])el.textContent=t[k]});
        document.documentElement.lang=l;
    }
});

// Lightbox
document.addEventListener('DOMContentLoaded',()=>{
    const lb=document.getElementById('lightbox');if(!lb)return;
    const img=document.getElementById('lbImg'),counter=document.getElementById('lbCounter');
    let imgs=[],idx=0;
    function open(images,i){imgs=images;idx=i;update();lb.classList.add('active');document.body.style.overflow='hidden'}
    function close(){lb.classList.remove('active');document.body.style.overflow=''}
    function update(){img.src=imgs[idx].src;img.alt=imgs[idx].alt;counter.textContent=`${idx+1} / ${imgs.length}`}
    function next(){idx=(idx+1)%imgs.length;update()}
    function prev(){idx=(idx-1+imgs.length)%imgs.length;update()}
    document.getElementById('lbClose').addEventListener('click',close);
    document.getElementById('lbNext').addEventListener('click',next);
    document.getElementById('lbPrev').addEventListener('click',prev);
    document.addEventListener('keydown',e=>{if(!lb.classList.contains('active'))return;if(e.key==='Escape')close();if(e.key==='ArrowRight')next();if(e.key==='ArrowLeft')prev()});
    lb.addEventListener('click',e=>{if(e.target===lb)close()});
    document.addEventListener('click',e=>{
        if(e.target.classList.contains('project-image')){
            const sec=e.target.closest('.project-block');
            const all=Array.from(sec.querySelectorAll('.project-image'));
            open(all,all.findIndex(i=>i.src===e.target.src));
        }
    });
    [document.getElementById('lbClose'),document.getElementById('lbPrev'),document.getElementById('lbNext'),img].forEach(el=>el?.addEventListener('click',e=>e.stopPropagation()));
});

// Parallax hero
window.addEventListener('scroll',()=>{
    const y=scrollY;
    const el=document.querySelector('.hero-right');
    if(el&&y<innerHeight)el.style.transform=`translateY(${y*.06}px)`;
});

// Image error fallback
document.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('.project-image').forEach(img=>{
        img.addEventListener('error',function(){
            this.style.background='var(--card)';this.style.display='flex';this.style.alignItems='center';this.style.justifyContent='center';
            this.outerHTML=`<div style="width:100%;height:240px;background:var(--card);display:flex;align-items:center;justify-content:center"><span style="color:var(--sage);font-family:var(--mono);font-size:.6rem;letter-spacing:2px">IMAGE NOT FOUND</span></div>`;
        });
    });
});
