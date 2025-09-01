document.addEventListener('DOMContentLoaded', () => {
  const resumeModal = document.getElementById('resumeModal');

  if (resumeModal) {
    resumeModal.addEventListener('show.bs.modal', () => {
      resumeModal.inert = false;
      document.activeElement.blur(); // blur trigger button
    });

    resumeModal.addEventListener('hide.bs.modal', () => {
      resumeModal.inert = true;
    });
  }
});

  // const viewResume = document.getElementById('viewResume');

  // viewResume.addEventListener('click', function(event){

  // const downloadConfirm = confirm("This view is just an image generator only. View?");

  //   if (!downloadConfirm) {

  //     event.preventDefault(); 
  //   }
  // });