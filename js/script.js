// mobile nav toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// active nav + rail node highlighting on scroll
const sections = document.querySelectorAll('section');
const navA = document.querySelectorAll('.nav-link');
const railNodes = document.querySelectorAll('.rail .node');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navA.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
      railNodes.forEach(n => n.classList.toggle('active', n.dataset.target === id));
    }
  });
}, { rootMargin: '-45% 0px -45% 0px' });

sections.forEach(s => observer.observe(s));

// reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));
