// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// Mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Fade-in on scroll
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => observer.observe(el));

// Contact form → WhatsApp
function sendWhatsApp() {
  const name = document.getElementById('name')?.value || '';
  const phone = document.getElementById('phone')?.value || '';
  const inquiry = document.getElementById('inquiry')?.value || '';
  const message = document.getElementById('message')?.value || '';
  if (!name || !phone) { alert('Please enter your name and phone number.'); return; }
  const text = `Hello Awadh Battery! 👋\n\nName: ${name}\nPhone: ${phone}\nLooking for: ${inquiry}\nMessage: ${message}`;
  window.open(`https://wa.me/918065486292?text=${encodeURIComponent(text)}`, '_blank');
}
