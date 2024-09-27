"use strict";

const portfolioItems = document.querySelectorAll(".portfolio__item");

portfolioItems.forEach((portfolioItem) => {
  const modalElement = portfolioItem.querySelector(".portfolio__modal");
  
  const sliderImagesWrapper = modalElement.querySelector('.portfolio__modal-slider-images-wrapper');
  const imageSliderDots = modalElement.querySelectorAll('.portfolio__modal-image-slider-dots button');
  
  const modalCloseElement = modalElement.querySelector(
    ".portfolio__modal-close",
  );
  const openModalButton = portfolioItem.querySelector(
    ".portfolio__open-modal-button",
  );

  // INIT
  let currentIndex = 0;
  let lastIndex = null;
  slide(currentIndex);

  function slide(index) {
    
    if (lastIndex !== null) {
      imageSliderDots[lastIndex].classList.add('bg-gray-400');
      imageSliderDots[lastIndex].classList.remove('bg-deepSlate');
    } 
    
    imageSliderDots[index].classList.remove('bg-gray-400');
    imageSliderDots[index].classList.add('bg-deepSlate');
    sliderImagesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }  

  portfolioItem.addEventListener("click", (event) => {
    console.log('modalCloseElement', modalCloseElement);
    
    if (modalCloseElement.contains(event.target) || event.target === openModalButton)
      modalElement.classList.toggle("hidden");
  });

  imageSliderDots.forEach(sliderDot => {
    sliderDot.addEventListener('click', event => {
      lastIndex = currentIndex;
      currentIndex = +event.target.dataset.index;

      slide(currentIndex);  
    })
  });
});