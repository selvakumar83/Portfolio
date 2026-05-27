// AOS INIT
AOS.init({
  duration: 1500,
  once: false
});

// TYPING ANIMATION
var typed = new Typed('.typing', {
  strings: [
    'Assistant Professor',
    'AI Researcher',
    'Machine Learning Expert',
    'Cryptography Specialist',
    'Java Developer',
    'PhD Scholar',
    'AI Application Developer',
    'Streamlit Expert'
  ],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 1500,
  loop: true
});

// PARTICLES JS
particlesJS('particles-js', {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    color: { value: '#8b5cf6' },
    line_linked: {
      enable: true,
      color: '#8b5cf6'
    },
    move: { speed: 2 }
  }
});


// NAVBAR STICKY EFFECT
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('sticky', window.scrollY > 50);
});


// SCROLL REVEAL FOR SECTIONS
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      section.classList.add('show');
    }
  });
});


// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});


// ACTIVE MENU LINK
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(n => n.classList.remove('active'));
    link.classList.add('active');
  });
});


// COUNTER FIXED
const counters = document.querySelectorAll('.counter-box h2');

counters.forEach(counter => {
  const target = parseInt(counter.innerText);

  let count = 0;

  const update = () => {
    const increment = target / 100;

    if (count < target) {
      count += increment;
      counter.innerText = Math.ceil(count);
      setTimeout(update, 30);
    } else {
      counter.innerText = target + '+';
    }
  };

  update();
});
