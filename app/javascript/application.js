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
            // Remove 'active' do slide atual
            heroSlides[currentSlide].classList.remove('active');
            
            // Avança para o próximo (volta ao início se for o último)
            currentSlide = (currentSlide + 1) % heroSlides.length;
            
            // Adiciona 'active' ao novo slide
            heroSlides[currentSlide].classList.add('active');
        }

        // Inicia o temporizador automático
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

    // ===== BACK TO TOP =====
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== MENU MOBILE TOGGLE =====
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('show');
            });
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