// ===== MENU RESPONSIVE =====
const nav = document.querySelector('nav ul');

// Créer le bouton toggle pour mobile
const toggle = document.createElement('button');
toggle.textContent = '☰';
toggle.style.fontSize = '1.8rem';
toggle.style.background = 'transparent';
toggle.style.color = 'white';
toggle.style.border = 'none';
toggle.style.cursor = 'pointer';

// Ajouter le bouton au header
document.querySelector('header .container').insertBefore(toggle, nav);

// Toggle menu sur mobile
toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// ===== SCROLL SMOOTH =====
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });

      // Fermer le menu mobile après clic
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
      }
    }
  });
});

// ===== PORTFOLIO HOVER EFFECT (optionnel, déjà dans CSS) =====
const portfolioItems = document.querySelectorAll('.portfolio img');

portfolioItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.05)';
    item.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
    item.style.boxShadow = 'none';
  });
});