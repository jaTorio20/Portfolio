document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('resumeModal');

  if (modal) {
    modal.addEventListener('show.bs.modal', () => {
      modal.inert = false;
      document.activeElement.blur(); // blur trigger button
    });

    modal.addEventListener('hide.bs.modal', () => {
      modal.inert = true;
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