window.onload = function() {
    const loader = document.querySelector('.loader');
    const mainContent = document.querySelector('.main-content');
  
    // Trigger the loading animation
    loader.style.animation = 'scaleRotate 1s forwards';
  
    // Wait for the animation to complete, then hide the loader and show content
    setTimeout(() => {
      loader.style.opacity = '0'; // Fade out loader
      mainContent.style.opacity = '1'; // Show main content
      mainContent.style.transform = 'scale(1)'; // Scale up main content
    }, 1000); // Match this to the animation duration
  };
  