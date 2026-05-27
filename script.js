AOS.init({
  duration: 1500,
  once: false
});

// Typing Animation
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
  startDelay: 500,
  loop: true

});

// Particle Background
particlesJS('particles-js', {

  particles: {

    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },

    color: {
      value: '#8b5cf6'
    },

    shape: {
      type: 'circle'
    },

    opacity: {
      value: 0.5,
      random: false
    },

    size: {
      value: 3,
      random: true
    },

    line_linked: {
      enable: true,
      distance: 150,
      color: '#8b5cf6',
      opacity: 0.4,
      width: 1
    },

    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false
    }

  },

  interactivity: {

    detect_on: 'canvas',

    events: {

      onhover: {
        enable: true,
        mode: 'grab'
      },

      onclick: {
        enable: true,
        mode: 'push'
      },

      resize: true

    },

    modes: {

      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },

      push: {
        particles_nb: 4
      }

    }

  },

  retina_detect: true

});

// Navbar Scroll Effect
window.addEventListener('scroll', function () {

  const navbar = document.querySelector('.navbar');

  navbar.classList.toggle(
    'sticky',
    window.scrollY > 50
  );

});

// Scroll Reveal Animation
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {

  sections.forEach(section => {

    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

      section.classList.add('show');

    }

  });

});

// Counter Animation
const counters = document.querySelectorAll('.counter-box h2');

counters.forEach(counter => {

  const updateCounter = () => {

    const target = +counter.innerText.replace('+', '');

    const count = +counter.innerText;

    const increment = target / 100;

    if (count < target) {

      counter.innerText =
        Math.ceil(count + increment);

      setTimeout(updateCounter, 30);

    } else {

      counter.innerText = target + '+';

    }

  };

  updateCounter();

});

// Active Navigation Link
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {

  link.addEventListener('click', () => {

    navLinks.forEach(nav =>
      nav.classList.remove('active')
    );

    link.classList.add('active');

  });

});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function (e) {

    e.preventDefault();

    document.querySelector(
      this.getAttribute('href')
    ).scrollIntoView({

      behavior: 'smooth'

    });

  });

});

// Contact Form Alert
const form = document.querySelector('.contact-form');

if(form){

form.addEventListener('submit', function(e){

  e.preventDefault();

  alert(
    'Thank you for contacting R. Selvakumar!'
  );

  form.reset();

});

}

// Mouse Cursor Glow
document.addEventListener('mousemove', (e) => {

  const glow = document.querySelector('.cursor-glow');

  if(glow){

    glow.style.left = e.pageX + 'px';

    glow.style.top = e.pageY + 'px';

  }

});

// Loading Animation
window.addEventListener('load', () => {

  document.body.classList.add('loaded');

});

// Skill Card Hover Sound Effect (Optional)
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {

  card.addEventListener('mouseenter', () => {

    card.style.transform =
      'translateY(-10px) scale(1.05)';

  });

  card.addEventListener('mouseleave', () => {

    card.style.transform =
      'translateY(0px) scale(1)';

  });

});

// Dynamic Footer Year
const footerYear = document.querySelector('#year');

if(footerYear){

footerYear.innerHTML =
new Date().getFullYear();

}