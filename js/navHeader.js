  const navHeader = document.getElementById('navHeader');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      navHeader.classList.add('navShadow');
    } else {
      navHeader.classList.remove('navShadow');
    }
  });


