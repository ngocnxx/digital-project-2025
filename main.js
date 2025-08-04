//VIDEO MODAL//
document.addEventListener('DOMContentLoaded', function() {
  // Get elements
  const openBtn = document.getElementById('open-video');
  const modal = document.querySelector('.video-modal');
  const closeBtn = document.querySelector('.close-btn');
  const backdrop = document.querySelector('.video-backdrop');
  const video = modal.querySelector('video');

  // Show modal
  openBtn.addEventListener('click', function() {
    modal.classList.remove('hidden');
    // Reset and pause video
    video.pause();
    video.currentTime = 0;
  });

  // Hide modal function
  function closeModal() {
    modal.classList.add('hidden');
    video.pause();
  }

  // Close with X or backdrop
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});
