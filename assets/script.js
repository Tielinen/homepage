"use strict";

const portfolioItems = document.querySelectorAll(".portfolio__item");

portfolioItems.forEach((portfolioItem) => {
  const modalElement = portfolioItem.querySelector(".portfolio__modal");
  
  const sliderImagesWrapper = modalElement.querySelector('.portfolio__modal-slider-images-wrapper');
  const imageSliderDots = modalElement.querySelectorAll('.portfolio__modal-image-slider-dots button');
  
  const modalCloseElement = modalElement.querySelector(".portfolio__modal-close");
  const openModalButton = portfolioItem.querySelector(".portfolio__open-modal-button");

  // INIT
  let currentIndex = 0;
  let lastIndex = null;
  slide(currentIndex);

  // Touch Variables
  let startX = 0;
  let startY = 0;
  let endX = 0;
  let endY = 0;
  const threshold = 50; // Minimum swipe distance in pixels to be considered a swipe
  const restraint = 100; // Maximum vertical distance allowed for a swipe
  const allowedTime = 500; // Maximum time allowed to consider it a swipe
  let startTime = 0;

  // Add CSS transition for smooth sliding if not already present
  sliderImagesWrapper.style.transition = 'transform 0.3s ease-in-out';

  // Touch Event Listeners
  sliderImagesWrapper.addEventListener('touchstart', handleTouchStart, false);
  sliderImagesWrapper.addEventListener('touchmove', handleTouchMove, false);
  sliderImagesWrapper.addEventListener('touchend', handleTouchEnd, false);

  function handleTouchStart(event) {
    if (event.touches.length !== 1) return; // Only consider single touch
    const touch = event.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
    startTime = new Date().getTime(); // Record time when touch starts
    // Optional: Prevent default behavior to avoid issues on some browsers
    // event.preventDefault();
  }

  function handleTouchMove(event) {
    if (event.touches.length !== 1) return; // Only consider single touch
    const touch = event.touches[0];
    endX = touch.clientX;
    endY = touch.clientY;
    // Optionally, you can provide visual feedback by moving the slider in real-time
  }

  function handleTouchEnd(event) {
    const elapsedTime = new Date().getTime() - startTime; // Calculate elapsed time
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    // Check if swipe meets criteria for horizontal swipe
    if (elapsedTime <= allowedTime) { // Ensure swipe wasn't too slow
      if (Math.abs(deltaX) >= threshold && Math.abs(deltaY) <= restraint) {
        if (deltaX > 0) {
          // Swipe Right - Show Previous Image
          showPreviousImage();
        } else {
          // Swipe Left - Show Next Image
          showNextImage();
        }
      }
    }

    // Reset touch positions
    startX = 0;
    startY = 0;
    endX = 0;
    endY = 0;
    startTime = 0;
  }

  function showPreviousImage() {
    if (currentIndex > 0) {
      lastIndex = currentIndex;
      currentIndex--;
      slide(currentIndex);
    }
  }

  function showNextImage() {
    if (currentIndex < imageSliderDots.length - 1) {
      lastIndex = currentIndex;
      currentIndex++;
      slide(currentIndex);
    }
  }

  function slide(index) {
    if (lastIndex !== null) {
      imageSliderDots[lastIndex].classList.add('bg-gray-400');
      imageSliderDots[lastIndex].classList.remove('bg-deepSlate');
    } 
    
    imageSliderDots[index].classList.remove('bg-gray-400');
    imageSliderDots[index].classList.add('bg-deepSlate');
    
    // Use the 'index' parameter to ensure consistency
    sliderImagesWrapper.style.transform = `translateX(-${index * 100}%)`;
    
    // Update lastIndex after sliding
    lastIndex = index;
  }  

  // Modal Toggle
  portfolioItem.addEventListener("click", (event) => {
    // Debugging: Check if modalCloseElement and openModalButton exist
    if (!modalCloseElement || !openModalButton) {
      console.error('Modal close element or open button not found.');
      return;
    }

    // Toggle modal visibility when clicking close button or open button
    if (modalCloseElement.contains(event.target) || event.target === openModalButton) {
      modalElement.classList.toggle("hidden");
      document.body.classList.toggle('overflow-hidden');
      const backdrop = portfolioItem.querySelector('.portfolio__modal-backdrop');
      if (backdrop) {
        backdrop.classList.toggle('hidden');
      } else {
        console.error('Backdrop element not found.');
      }
    }
  });

  // Dots Click Event
  imageSliderDots.forEach(sliderDot => {
    sliderDot.addEventListener('click', event => {
      const targetIndex = +event.target.dataset.index;
      if (isNaN(targetIndex)) {
        console.error('Invalid data-index on slider dot.');
        return;
      }

      if (targetIndex === currentIndex) return; // No action if clicking on current dot

      lastIndex = currentIndex;
      currentIndex = targetIndex;

      slide(currentIndex);  
    });
  });
});
