document.addEventListener('DOMContentLoaded', function() {
  // Subtle animation for the hero section
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.animation = 'fadeIn 2s ease-in-out';
  }

  // Fullscreen functionality
  const fullscreenBtn = document.querySelector('.fullscreen-btn');
  
  fullscreenBtn.addEventListener('click', function() {
    // Check if we're on a game page by looking for game iframe
    const gameFrame = document.querySelector('#granny-game');
    const targetElement = gameFrame || document.documentElement;

    if (!document.fullscreenElement) {
      targetElement.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
      fullscreenBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
        </svg>`;
    } else {
      document.exitFullscreen();
      fullscreenBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
        </svg>`;
    }
  });

  document.addEventListener('fullscreenchange', function() {
    if (!document.fullscreenElement) {
      fullscreenBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
        </svg>`;
    }
  });
});
