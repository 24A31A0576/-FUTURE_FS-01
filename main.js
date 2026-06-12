/* ════════════════════════════════════
   SANGEETHA GOTTALA — main.js
   ════════════════════════════════════ */

'use strict';

/* ── LOADER ── */
(function initLoader() {
  const loader    = document.getElementById('loader');
  const fillEl    = document.getElementById('loaderFill');
  let   progress  = 0;
  const interval  = setInterval(() => {
    progress += Math.random() * 18;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => loader.classList.add('hidden'), 400);
    }
    fillEl.style.width = progress + '%';
  }, 80);
})();

/* ── PARTICLES ── */
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  const ctx    = canvas.getContext('2d');
  let   W, H, particles = [];

  const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
  resize();
  window.addEventListener('resize', resize);

  function Particle() {
    this.x  = Math.random() * W;
    this.y  = Math.random() * H;
    this.vx = (Math.random() - .5) * .4;
    this.vy = (Math.random() - .5) * .4;
    this.r  = Math.random() * 2 + .5;
    this.alpha = Math.random() * .6 + .1;
  }
  Particle.prototype.update = function() {
    this.x += this.vx; this.y += this.vy;
    if (this.x < 0) this.x = W; if (this.x > W) this.x = 0;
    if (this.y < 0) this.y = H; if (this.y > H) this.y = 0;
  };

  for (let i = 0; i < 80; i++) particles.push(new Particle());

  const isDark = () => document.documentElement.getAttribute('data-theme') !== 'light';

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const color = isDark() ? '167,139,250' : '124,58,237';
    particles.forEach(p => {
      p.update();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color},${p.alpha})`;
      ctx.fill();
    });
    // lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${color},${.15 * (1 - dist / 120)})`;
          ctx.lineWidth = .8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── NAVBAR ── */
(function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const links     = navLinks.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveLink();
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 200) current = s.id;
    });
    links.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
  }
})();

/* ── SCROLL PROGRESS ── */
(function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = scrolled + '%';
  });
})();

/* ── THEME TOGGLE ── */
(function initTheme() {
  const btn  = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  const saved = localStorage.getItem('theme') || 'dark';
  applyTheme(saved);

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
})();

/* ── TYPING EFFECT ── */
(function initTyping() {
  const el    = document.getElementById('typedText');
  const words = [
    'CSE Student 🎓',
    'Full-Stack Developer 💻',
    'Python Enthusiast 🐍',
    'ML Explorer 🤖',
    'Problem Solver 🧩',
    'Open Source Learner 🌐'
  ];
  let wi = 0, ci = 0, deleting = false;

  function type() {
    const word = words[wi];
    el.textContent = deleting ? word.slice(0, --ci) : word.slice(0, ++ci);
    let delay = deleting ? 60 : 100;
    if (!deleting && ci === word.length) { delay = 2000; deleting = true; }
    if (deleting && ci === 0)           { deleting = false; wi = (wi + 1) % words.length; delay = 400; }
    setTimeout(type, delay);
  }
  setTimeout(type, 1200);
})();

/* ── ANIMATED COUNTERS ── */
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-count'), 10);
  let   current = 0;
  const step    = Math.ceil(target / 40);
  const timer   = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current >= target) clearInterval(timer);
  }, 40);
}

/* ── SKILL BAR ANIMATION ── */
function animateBars(container) {
  container.querySelectorAll('.bar-fill').forEach(bar => {
    bar.style.width = bar.getAttribute('data-width') + '%';
  });
}

/* ── INTERSECTION OBSERVER ── */
(function initObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      // counters
      entry.target.querySelectorAll('[data-count]').forEach(animateCounter);
      // bars
      animateBars(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.section, .about-stats, .skills-grid, .github-stats-grid, .gh-streak').forEach(el => {
    observer.observe(el);
  });
})();

/* ── CONTACT FORM ── */
(function initContactForm() {
  const form    = document.getElementById('contactForm');
  if (!form) return;
  const success = document.getElementById('formSuccess');

  const validate = (id, errId, msg) => {
    const el  = document.getElementById(id);
    const err = document.getElementById(errId);
    if (!el || !err) return true;
    const valid = el.validity.valid && el.value.trim();
    err.textContent = valid ? '' : msg;
    err.classList.toggle('visible', !valid);
    return valid;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameOk  = validate('name',    'nameError',    'Please enter your name.');
    const emailOk = validate('email',   'emailError',   'Please enter a valid email.');
    const msgOk   = validate('message', 'messageError', 'Please enter a message.');
    if (nameOk && emailOk && msgOk) {
      success.classList.add('visible');
      form.reset();
      setTimeout(() => success.classList.remove('visible'), 5000);
    }
  });

  // real-time validation
  ['name','email','message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => {
      const err = document.getElementById(id + 'Error');
      if (err) { err.textContent = ''; err.classList.remove('visible'); }
    });
  });
})();

/* ── BACK TO TOP ── */
(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

/* ── AOS INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 700,
    easing: 'ease-out-quart',
    once: true,
    offset: 60
  });
});

/* ── SMOOTH SCROLL for all anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
