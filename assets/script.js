"use strict";

// Function to initialize Flickity on a carousel
function initializeFlickity(carouselElement) {
  if (!carouselElement.flickityInstance) {
    imagesLoaded(carouselElement, () => {
      carouselElement.flickityInstance = new Flickity(carouselElement, {
        cellAlign: "left",
        contain: true,
        prevNextButtons: false,
        fade: true,
        draggable: true,
        // Add any other Flickity options you need
      });
    });
  } else {
    carouselElement.flickityInstance.resize();
  }
}

const portfolioItems = document.querySelectorAll(".portfolio__item");

portfolioItems.forEach((portfolioItem) => {
  const modalElement = portfolioItem.querySelector(".portfolio__modal");
  const mainCarousel = modalElement.querySelector(".main-carousel");
  const modalCloseElement = modalElement.querySelector(".portfolio__modal-close");
  const openModalButton = portfolioItem.querySelector(".portfolio__open-modal-button");

  // Modal Toggle
  portfolioItem.addEventListener("click", (event) => {
    if (!modalCloseElement || !openModalButton) {
      console.error("Modal close element or open button not found.");
      return;
    }

    if (
      modalCloseElement.contains(event.target) ||
      event.target === openModalButton
    ) {
      modalElement.classList.toggle("hidden");
      document.body.classList.toggle("overflow-hidden");
      const backdrop = portfolioItem.querySelector(".portfolio__modal-backdrop");
      if (backdrop) {
        backdrop.classList.toggle("hidden");
      } else {
        console.error("Backdrop element not found.");
      }

      if (!modalElement.classList.contains("hidden")) {
        // Modal is now visible, initialize Flickity
        initializeFlickity(mainCarousel);
      }
    }
  });
});
