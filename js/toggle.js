
// If the specific anchor is clicked, the viewport will move according to specified anchor links
function setupAnchorObserver(anchorSelector) {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll(anchorSelector);

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    {
      threshold: 0.3
    }
  );

  sections.forEach(section => observer.observe(section));
}

// Reuse for multiple anchor groups
setupAnchorObserver('.anchor-Header');
setupAnchorObserver('.anchor-Modal');
// setupAnchorObserver('.anchor-sidebar');




