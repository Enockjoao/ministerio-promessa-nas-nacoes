import "@hotwired/turbo-rails"
import "controllers"
import * as bootstrap from "bootstrap"

document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const backToTop = document.getElementById('backToTop');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-links a');
    const particlesContainer = document.getElementById('particles');

    // ===== HERO SLIDER COM TEMPORIZADOR =====
    const heroSlides = document.querySelectorAll('.hero-slide');

    if (heroSlides.length > 1) {
        let currentSlide = 0;
        const slideInterval = 6000; 

        function nextSlide() {
            heroSlides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % heroSlides.length;
            heroSlides[currentSlide].classList.add('active');
        }

        setInterval(nextSlide, slideInterval);
    }

    // ===== SCROLL - HEADER E BACK TO TOP =====
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            if (header) header.classList.add('scrolled');
            if (backToTop) backToTop.classList.add('visible');
        } else {
            if (header) header.classList.remove('scrolled');
            if (backToTop) backToTop.classList.remove('visible');
        }
    });

    // ===== SCROLL SPY - DESTACAR MENU ATIVO =====
    const sections = document.querySelectorAll('section[id]');
    
    function scrollSpy() {
        const scrollPosition = window.scrollY + 150; // Offset para ativar um pouco antes

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove 'active' de todos os links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Adiciona 'active' ao link correspondente
                const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });

        // Se estiver no topo, ativa o "Início"
        if (window.scrollY < 100) {
            navLinks.forEach(link => link.classList.remove('active'));
            const homeLink = document.querySelector('.nav-links a[href="#hero"]');
            if (homeLink) homeLink.classList.add('active');
        }
    }

    // Executa o scroll spy no scroll e no carregamento
    window.addEventListener('scroll', scrollSpy);
    scrollSpy(); // Executa uma vez ao carregar

    // ===== SMOOTH SCROLL NOS LINKS DO MENU =====
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Só aplica smooth scroll para links com #
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80; // Desconta altura do header
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }

            // Fecha o menu mobile
            if (navMenu) navMenu.classList.remove('show');
        });
    });


    // ===== MENU MOBILE TOGGLE =====
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }

    // ===== CREATE PARTICLES =====
    if (particlesContainer) {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = 15 + Math.random() * 10 + 's';
            particlesContainer.appendChild(particle);
        }
    }
});