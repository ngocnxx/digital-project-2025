// VIDEO MODAL 
document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const openBtn   = document.getElementById('open-video');
  const modal     = document.getElementById('video-modal');
  const closeBtn  = document.getElementById('close-video');
  const backdrop  = modal.querySelector('.video-backdrop');
  const video     = document.getElementById('hero-video');

  // Open modal and play video (UNMUTED)
  openBtn.addEventListener('click', function() {
    modal.classList.remove('hidden');
    video.currentTime = 0;
    video.muted = false;    // unmute before playing
    video.play();
    video.focus(); 
  });

  // Hide modal and pause video
  function closeModal() {
    modal.classList.add('hidden');
    video.pause();
    video.currentTime = 0;
    video.muted = true; // reset muted for next open 
  }

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});
