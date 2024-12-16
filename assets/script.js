`use strict`;

// Mobile menu
const menuToggleElement = document.querySelector(`.menu__toggle`);
const mobileMenuIconElements = Array.from(menuToggleElement.children);
const headerMenusElement = document.querySelector(`.header__menus`);

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
  console.log(arrayOfElements);
  arrayOfElements.forEach((element) => {
    element.classList.toggle(`hidden`);
  });
}

// Portfolio
const portfolioItems = document.querySelectorAll(`.portfolio__item`);

portfolioItems.forEach((portfolioItem) => {
  const modalElement = portfolioItem.querySelector(`.portfolio__modal`);
  const mainCarousel = modalElement.querySelector(`.main-carousel`);
  const modalCloseElement = modalElement.querySelector(
    `.portfolio__modal-close`,
  );
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
    console.log(event.currentTarget);
    if (!modalCloseElement || !openModalButtons) {
      console.error(`Modal close element or open button not found.`);
      return;
    }

    if (
      modalCloseElement.contains(event.target) ||
      openModalButtons.includes(event.target)
    ) {
      // !!! if needs to check actual target, img etc !!!
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

// Reviews
const reviewsFlickity = new Flickity(
  `.reviews__items`,
  SETTINGS.reviewsFlickityObject,
);
