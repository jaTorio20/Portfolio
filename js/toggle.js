const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.getElementById('sidebar');
// const content = document.getElementById('content');


toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  
  // content.classList.toggle('active');
  });

//   links.forEach(link => {
//   link.addEventListener('click', () => {
//     if (window.innerWidth < 730) { // Only close sidebar on smaller screens
//       sidebar.classList.remove('active');
//     }
//   });

// });