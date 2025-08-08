`use strict`;

// Mobile menu
const menuToggleElement = document.querySelector(`#js-mobile-menu-toggle`);
if (menuToggleElement) {
  const menuHamburgerIcon =
    menuToggleElement.querySelector(`#js-hamburger-icon`);
  const xMark = menuToggleElement.querySelector(`#js-x-mark-icon`);
  const headerMenusElement = document.querySelector(`#js-header-menus`);

  menuToggleElement.addEventListener(`click`, (event) => {
    const isMenuOpen =
      menuToggleElement.getAttribute(`aria-expanded`) === `true`;
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
}

// Portfolio
const portfolioItems = document.querySelectorAll(`.js-portfolio-item`);
if (portfolioItems.length) {
  portfolioItems.forEach((portfolioItem) => {
    const modalElement = portfolioItem.querySelector(`.js-portfolio-modal`);
    const mainCarousel = modalElement.querySelector(`.js-main-carousel`);
    const modalCloseElement = modalElement.querySelector(
      `.js-portfolio-modal-close`,
    );

    const backdrop = portfolioItem.querySelector(
      `.js-portfolio-modal-backdrop`,
    );
    const openModalButtons = Array.from(
      portfolioItem.querySelectorAll(`.js-open-modal`),
    );

    let lastFocusedElement = null;

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

    function openModal(trigger) {
      modalElement.classList.remove(`hidden`);
      document.body.classList.add(`overflow-hidden`);
      backdrop.classList.remove(`hidden`);

      initializeFlickity(mainCarousel);

      lastFocusedElement = trigger;
      modalElement.focus();
      document.addEventListener(`keydown`, handleKeydown);
    }

    function closeModal() {
      modalElement.classList.add(`hidden`);
      document.body.classList.remove(`overflow-hidden`);
      backdrop.classList.add(`hidden`);

      document.removeEventListener(`keydown`, handleKeydown);
      if (lastFocusedElement) {
        lastFocusedElement.focus();
      }
    }

    function handleKeydown(event) {
      if (event.key === `Escape`) {
        closeModal();
      } else if (event.key === `Tab`) {
        trapFocus(event);
      }
    }

    function trapFocus(event) {
      const focusableSelectors = [
        `a[href]`,
        `area[href]`,
        `input:not([disabled])`,
        `select:not([disabled])`,
        `textarea:not([disabled])`,
        `button:not([disabled])`,
        `[tabindex]:not([tabindex="-1"])`,
      ];
      const focusableElements = modalElement.querySelectorAll(
        focusableSelectors.join(`,`),
      );
      if (!focusableElements.length) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }

    portfolioItem.addEventListener(`click`, (event) => {
      if (openModalButtons.includes(event.target)) {
        openModal(event.target);
      } else if (
        modalCloseElement.contains(event.target) ||
        event.target === backdrop
      ) {
        closeModal();
      }
    });
  });
}

// Load more
const loadMoreButton = document.querySelector(`#js-portfolio-load-more`);
if (loadMoreButton) {
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
}

// Reviews
const reviewsFlickity = new Flickity(
  `#js-reviews-items`,
  SETTINGS.reviewsFlickityObject,
);
