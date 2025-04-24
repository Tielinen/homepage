`use strict`;

// Mobile menu
const menuToggleElement = document.querySelector(`#js-mobile-menu-toggle`);
const mobileMenuIconElements = Array.from(menuToggleElement.children);
const menuHamburgerIcon = menuToggleElement.querySelector(`#js-hamburger-icon`);
const xMark = menuToggleElement.querySelector(`#js-x-mark-icon`);

const headerMenusElement = document.querySelector(`#js-header-menus`);

menuToggleElement.addEventListener(`click`, (event) => {
  const isMenuOpen = menuToggleElement.getAttribute(`aria-expanded`) === `true`;
  isMenuOpen ? closeMobileMenu() : openMobileMenu();
});

headerMenusElement.addEventListener(`click`, (event) => {
  if (event.target.tagName === `A`) {
    const isMenuOpen =
      menuToggleElement.getAttribute(`aria-expanded`) === `true`;

    if (isMenuOpen) {
      closeMobileMenu();
    }
  }
});

function openMobileMenu() {
  menuToggleElement.setAttribute(`aria-expanded`, `true`);
  document.body.classList.add(`overflow-hidden`);

  menuHamburgerIcon.classList.add(`hidden`);
  xMark.classList.remove(`hidden`);
  headerMenusElement.classList.remove(`hidden`);
}

function closeMobileMenu() {
  menuToggleElement.setAttribute(`aria-expanded`, `false`);
  document.body.classList.remove(`overflow-hidden`);

  menuHamburgerIcon.classList.remove(`hidden`);
  xMark.classList.add(`hidden`);
  headerMenusElement.classList.add(`hidden`);
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
const loadMoreButton = document.querySelector(`#js-portfolio-load-more`);
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
