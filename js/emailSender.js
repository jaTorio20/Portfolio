
const contactForm = document.getElementById('contactForm');
const submitEmailBtn = document.getElementById("submitEmail");
const successEmailModal = new bootstrap.Modal(document.getElementById('successEMail'));
const failedEmailModal = new bootstrap.Modal(document.getElementById('failedEMail'));

contactForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const originalText = submitEmailBtn.innerHTML; // store original button text

  // Show loading spinner
  submitEmailBtn.innerHTML = `
    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
    <span role="status">Sending...</span>
  `;
  submitEmailBtn.disabled = true;

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwWXuwwx4gFTROUoG-W6n9ikmGvHptcdNG1goAf3ukA829oAtQW10eOtx91tLElbynAvg/exec', {
      method: 'POST',
      body: new FormData(contactForm) 
    });

    if (!response.ok) throw new Error("Server error");

    // Restore button & show modal
    submitEmailBtn.innerHTML = originalText;
    submitEmailBtn.disabled = false;
    successEmailModal.show();
    contactForm.reset();

  } catch (error) {
    console.error(error);
    submitEmailBtn.innerHTML = originalText;
    submitEmailBtn.disabled = false;
    failedEmailModal.show();
  }
});



// I got this gmail sender by APP Script
// https://script.google.com/macros/