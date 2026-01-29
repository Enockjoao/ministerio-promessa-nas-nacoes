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

    // Scroll - header e back to top
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            if (header) header.classList.add('scrolled');
            if (backToTop) backToTop.classList.add('visible');
        } else {
            if (header) header.classList.remove('scrolled');
            if (backToTop) backToTop.classList.remove('visible');
        }
    });

    // Back to top
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Menu mobile toggle
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

    // Create particles
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
