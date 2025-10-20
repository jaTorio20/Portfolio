const revealElements = document.querySelectorAll('.global-reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 200; // how early it triggers before reaching full view

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active'); //remove when leaving view
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
