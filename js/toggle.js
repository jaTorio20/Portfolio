const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
const listIcon = document.getElementById('list-icon');
const xIcon = document.getElementById('x-icon');

// Function to check if the screen size is below medium (md)
function isBelowMedium() {
  return window.innerWidth < 1268; // Assuming medium size is 768px
}

// Update the visibility of the sidebar and toggle button based on screen size
function updateSidebarVisibility() {
  if (isBelowMedium()) {
    // Below medium size: show the toggle button, hide the sidebar by default
    toggleBtn.style.display = 'block';
    sidebar.classList.remove('active');
    listIcon.classList.remove('d-none');
    xIcon.classList.add('d-none');
  } else {
    // Above medium size: hide the toggle button, always show the sidebar
    toggleBtn.style.display = 'none';
    sidebar.classList.add('active');
    listIcon.classList.add('d-none');
    xIcon.classList.remove('d-none');
  }
}

// Initial check and setup
updateSidebarVisibility();



window.addEventListener('resize', updateSidebarVisibility);
// Toggle sidebar visibility when the button is clicked (only below medium size)
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  listIcon.classList.toggle('d-none');
  xIcon.classList.toggle('d-none');
});

document.querySelectorAll('.anchor-sidebar').forEach(link => {
  link.addEventListener('click', function() {
    setTimeout(() => {
      if (sidebar.classList.contains('active') && isBelowMedium()) {
        sidebar.classList.remove('active');
        listIcon.classList.remove('d-none');
        xIcon.classList.add('d-none');
      }
    }, 100);
  });
});

// Ensure the toggle button works only when clicked
document.body.addEventListener('click', (event) => {
  // Close sidebar if clicked anywhere outside of sidebar and toggle button
  if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target) && isBelowMedium()) {
    sidebar.classList.remove('active');
    listIcon.classList.remove('d-none');
    xIcon.classList.add('d-none');
  }
});



// If the specific anchor is clicked, the viewport will move according to specified anchor links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.anchor-sidebar');

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
    threshold: 0.3 // Adjust for when the section is considered "in view"
  }
);

sections.forEach(section => {
  observer.observe(section);
});



