`use strict`;

// Mobile menu
const menuToggleElement = document.querySelector(`#js-menu-toggle`);
const mobileMenuIconElements = Array.from(menuToggleElement.children);
const headerMenusElement = document.querySelector(`#js-header-menus`);

menuToggleElement.addEventListener(`click`, (event) => {
  toggleMobileMenu();
});

headerMenusElement.addEventListener(`click`, (event) => {
  if (event.target.tagName === `A`) {
    toggleMobileMenu();
  }
});

function toggleMobileMenu() {
  toggleHiddenClasses([...mobileMenuIconElements, headerMenusElement]);
  document.body.classList.toggle(`overflow-hidden`);
}

function toggleHiddenClasses(arrayOfElements) {
  arrayOfElements.forEach((element) => {
    element.classList.toggle(`hidden`);
  });
}

// Portfolio
const portfolioItems = document.querySelectorAll(`.js-portfolio-item`);

portfolioItems.forEach((portfolioItem) => {
  const modalElement = portfolioItem.querySelector(`.js-portfolio-modal`);
  const mainCarousel = modalElement.querySelector(`.js-main-carousel`);
  const modalCloseElement = modalElement.querySelector(
    `.js-portfolio-modal-close`,
  );

  const backdrop = portfolioItem.querySelector(`.js-portfolio-modal-backdrop`);
  const openModalButtons = Array.from(
    portfolioItem.querySelectorAll(`.js-open-modal`),
  );

  // Function to initialize Flickity on a carousel
  function initializeFlickity(carouselElement) {
    if (!carouselElement.flickityInstance) {
      imagesLoaded(carouselElement, () => {
        carouselElement.flickityInstance = new Flickity(
          carouselElement,
          SETTINGS.portfolioFlickityObject,
        );
      });
    } else {
      carouselElement.flickityInstance.resize();
    }
  }

  // Modal Toggle
  portfolioItem.addEventListener(`click`, (event) => {
    if (
      modalCloseElement.contains(event.target) ||
      openModalButtons.includes(event.target) ||
      event.target === backdrop
    ) {
      modalElement.classList.toggle(`hidden`);
      document.body.classList.toggle(`overflow-hidden`);

      backdrop.classList.toggle(`hidden`);

      if (!modalElement.classList.contains(`hidden`)) {
        // Modal is now visible, initialize Flickity
        initializeFlickity(mainCarousel);
      }
    }
  });
});

// Load more
const loadMoreButton = document.querySelector(`.js-portfolio-load-more`);
loadMoreButton.addEventListener(`click`, () => {
  loadPortfolioItems(SETTINGS.portfolioLoadCount);
});

function loadPortfolioItems(portfolioLoadCount) {
  portfolioItems.forEach((portfolioItem) => {
    if (portfolioItem.classList.contains(`hidden`) && portfolioLoadCount) {
      portfolioLoadCount--;
      portfolioItem.classList.remove(`hidden`);
      if (
        !Array.from(portfolioItems).some((item) =>
          item.classList.contains(`hidden`),
        )
      ) {
        loadMoreButton.classList.add(`hidden`);
      }
    }
  });
}

// Reviews
const reviewsFlickity = new Flickity(
  `#js-reviews-items`,
  SETTINGS.reviewsFlickityObject,
);
