// Get elements
const contactForm = document.getElementById('contactForm');
const submitEmailBtn = document.getElementById('submitEmail');

// Create modals dynamically if not in the form
let successEmailModalEl = document.getElementById('successEMail');
let failedEmailModalEl = document.getElementById('failedEMail');

// Create success modal if it doesn't exist
if (!successEmailModalEl) {
  successEmailModalEl = document.createElement('div');
  successEmailModalEl.classList.add('modal', 'fade');
  successEmailModalEl.id = 'successEMail';
  successEmailModalEl.tabIndex = -1;
  successEmailModalEl.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title">Success</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Your message has been sent successfully!
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(successEmailModalEl);
}

// Create failed modal if it doesn't exist
if (!failedEmailModalEl) {
  failedEmailModalEl = document.createElement('div');
  failedEmailModalEl.classList.add('modal', 'fade');
  failedEmailModalEl.id = 'failedEMail';
  failedEmailModalEl.tabIndex = -1;
  failedEmailModalEl.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5 class="modal-title">Error</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Please check your internet connection and try again
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(failedEmailModalEl);
}

// Initialize bootstrap modals
const successEmailModal = new bootstrap.Modal(successEmailModalEl);
const failedEmailModal = new bootstrap.Modal(failedEmailModalEl);

// Form submit handler
contactForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const originalText = submitEmailBtn.innerHTML;
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

    if (!response.ok) throw new Error('Server error');

    submitEmailBtn.innerHTML = originalText;
    submitEmailBtn.disabled = false;
    contactForm.reset();
    successEmailModal.show();

  } catch (error) {
    console.error(error);
    submitEmailBtn.innerHTML = originalText;
    submitEmailBtn.disabled = false;
    failedEmailModal.show();
  }
});
