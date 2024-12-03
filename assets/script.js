`use strict`;

// Mobile menu
const headerMenusElement = document.querySelector(`.header__menus`);
document.querySelector(`.menu__toggle`).addEventListener(`click`, event => {
  
  Array.from(event.currentTarget.children).forEach(child => {
    child.classList.toggle(`hidden`);
  });

  headerMenusElement.classList.toggle(`hidden`);
  document.body.classList.toggle(`overflow-hidden`);
});

headerMenusElement.addEventListener(`click`, event => {
  if (event.target.tagName === `A`) {
    headerMenusElement.classList.add (`hidden`);
    console.log('jjjeeeee');
  }
  
});






const portfolioItems = document.querySelectorAll(`.portfolio__item`);

portfolioItems.forEach((portfolioItem) => {
  const modalElement = portfolioItem.querySelector(`.portfolio__modal`);
  const mainCarousel = modalElement.querySelector(`.main-carousel`);
  const modalCloseElement = modalElement.querySelector(
    `.portfolio__modal-close`,
  );
  const openModalButton = portfolioItem.querySelector(
    `.portfolio__open-modal-button`,
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
    if (!modalCloseElement || !openModalButton) {
      console.error(`Modal close element or open button not found.`);
      return;
    }

    if (
      modalCloseElement.contains(event.target) ||
      event.target === openModalButton
    ) {
      modalElement.classList.toggle(`hidden`);
      document.body.classList.toggle(`overflow-hidden`);
      const backdrop = portfolioItem.querySelector(
        `.portfolio__modal-backdrop`,
      );
      if (backdrop) {
        backdrop.classList.toggle(`hidden`);
      } else {
        console.error(`Backdrop element not found.`);
      }

      if (!modalElement.classList.contains(`hidden`)) {
        // Modal is now visible, initialize Flickity
        initializeFlickity(mainCarousel);
      }
    }
  });
});

// Load more
const loadMoreButton = document.querySelector(`.portfolio__load-more`);
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

const reviewsFlickity = new Flickity(
  `.reviews__items`,
  SETTINGS.reviewsFlickityObject
);