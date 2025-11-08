// script.js

gsap.registerPlugin(ScrollTrigger);

// Mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Video controls
document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const video = this.closest('.project-preview').querySelector('.project-video');
        if (video.paused) {
            video.play();
            this.classList.add('playing');
        } else {
            video.pause();
            this.classList.remove('playing');
        }
    });
});

// Auto-play videos when in view
const videos = document.querySelectorAll('.project-video');
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target;
        const playBtn = video.closest('.project-preview').querySelector('.play-btn');
        
        if (entry.isIntersecting) {
            video.play();
            if (playBtn) playBtn.classList.add('playing');
        } else {
            video.pause();
            if (playBtn) playBtn.classList.remove('playing');
        }
    });
}, { threshold: 0.5 });

videos.forEach(video => videoObserver.observe(video));

// Fade in animations
gsap.utils.toArray('.hero-content > *').forEach((elem, i) => {
    gsap.from(elem, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power2.out'
    });
});

// Scroll animations
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%'
        },
        opacity: 0,
        x: -20,
        duration: 0.6,
        ease: 'power2.out'
    });
});

gsap.utils.toArray('.project').forEach((project, i) => {
    gsap.from(project, {
        scrollTrigger: {
            trigger: project,
            start: 'top 85%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power2.out'
    });
});

gsap.from('.about-text', {
    scrollTrigger: {
        trigger: '.about-text',
        start: 'top 75%'
    },
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: 'power2.out'
});

gsap.from('.skills-box', {
    scrollTrigger: {
        trigger: '.skills-box',
        start: 'top 75%'
    },
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out'
});

gsap.utils.toArray('.contact-link').forEach((link, i) => {
    gsap.from(link, {
        scrollTrigger: {
            trigger: link,
            start: 'top 85%'
        },
        opacity: 0,
        x: -20,
        duration: 0.5,
        delay: i * 0.1,
        ease: 'power2.out'
    });
});

// Parallax scroll
gsap.to('.hero-content', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    },
    y: 100,
    opacity: 0.5,
    ease: 'none'
});