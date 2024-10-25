import { queryElement } from '$utils/queryElement';
import { queryElements } from '$utils/queryElements';
import { remToPixels } from '$utils/remToPixels';

export const height = () => {
  // eslint-disable-next-line no-console
  console.log('height');

  const navComponent = queryElement<HTMLDivElement>('.nav_component');
  if (!navComponent) return;

  const navMenu = queryElement<HTMLDivElement>('.w-nav-menu', navComponent);
  const navMenuButton = queryElement<HTMLButtonElement>('.w-nav-button', navComponent);
  const navContents = queryElements<HTMLDivElement>('.nav-dropdown_content', navComponent);
  const navToggles = queryElements<HTMLDivElement>('.nav-dropdown_toggle', navComponent);

  // Method 1: Using getBoundingClientRect()
  function getDistanceFromTop(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    return rect.y;
  }

  // Desktop nav max height
  navToggles.forEach((toggle, index) => {
    // Set up the observer
    const observer = observeClassChanges(toggle, (newClasses: string) => {
      // Check if screen width is 992px or smaller
      const isDesktop = window.matchMedia('(min-width: 992px)');
      if (newClasses.includes('w--open')) {
        const computedStyle = getComputedStyle(document.documentElement),
          gapRem = computedStyle.getPropertyValue('--layout-gap--small'),
          gap = remToPixels(parseFloat(gapRem));

        if (isDesktop.matches) {
          const distanceFromTop = getDistanceFromTop(navContents[index]);
          const maxHeight = window.innerHeight - distanceFromTop - gap;
          navContents[index].style.maxHeight = `${maxHeight}px`;
        } else {
          const distanceFromTop = getDistanceFromTop(navMenu);
          const maxHeight = window.innerHeight - distanceFromTop - gap * 2;
          navMenu.firstElementChild.style.maxHeight = `${maxHeight}px`;
        }
      } else {
        navContents[index].style.removeProperty('max-height');
      }
    });
  });

  // Function to create and setup the mutation observer
  function observeClassChanges(elementToObserve, callback) {
    // Configure the observer to watch for attribute changes
    const config = {
      attributes: true, // Watch for attribute changes
      attributeFilter: ['class'], // Only watch class attribute changes
    };

    // Create a new mutation observer
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          // Call the callback function with the new and old class lists
          callback(
            mutation.target.className, // New class list
            mutation.oldValue // Previous class list
          );
        }
      });
    });

    // Start observing the element
    observer.observe(elementToObserve, config);

    // Return the observer in case you want to stop observing later
    return observer;
  }
};
