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

// Listen for window resize events to handle changes in screen size
window.addEventListener('resize', updateSidebarVisibility);

// Toggle sidebar visibility when the button is clicked (only below medium size)
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  listIcon.classList.toggle('d-none');
  xIcon.classList.toggle('d-none');
});

// Hide sidebar when clicked (only if the toggle button hasn't been clicked)
sidebar.addEventListener('click', (event) => {
  // Prevent hiding when clicking inside the sidebar (to avoid accidental close)
  event.stopPropagation();

  // Close the sidebar when clicked anywhere outside
  if (sidebar.classList.contains('active') && isBelowMedium()) {
    sidebar.classList.remove('active');
    listIcon.classList.remove('d-none');
    xIcon.classList.add('d-none');
  }
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



