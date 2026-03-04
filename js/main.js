/**
 * main.js — Primetech Solutions
 * Extracted from index.html for easier maintenance
 */

/* ── Scroll Reveal ──────────────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
    (entries) => {
          entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                            revealObserver.unobserve(entry.target);
                  }
          });
    },
  { threshold: 0.1 }
  );

document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el);
});

/* ── Service Card Stagger Animation ────────────────────────────────────── */
document.querySelectorAll('.service-card').forEach((card, i) => {
    card.style.transitionDelay = i * 0.07 + 's';
});

/* ── Mobile Navigation Toggle ──────────────────────────────────────────── */
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
          navToggle.classList.toggle('open');
          navLinks.classList.toggle('open');
    });

  // Close menu when a nav link is clicked
  navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navLinks.classList.remove('open');
        });
  });
}
