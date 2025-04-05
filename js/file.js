const downloadResume = document.getElementById('downloadResume');
  downloadResume.addEventListener('click', function(event){
  const downloadConfirm = confirm("Are you sure you want to download this file?");
    if (!downloadConfirm) {
      event.preventDefault(); 
    }
  });

  const viewResume = document.getElementById('viewResume');

  viewResume.addEventListener('click', function(event){

  const downloadConfirm = confirm("This view is just an image generator only. View?");

    if (!downloadConfirm) {

      event.preventDefault(); 
    }
  });