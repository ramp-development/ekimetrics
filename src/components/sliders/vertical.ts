import Splide from '@splidejs/splide';

import { log } from '$utils/log';

export const vertical = () => {
  log('vertical');

  const components = document.querySelectorAll<HTMLDivElement>('.vertical-slider_component');
  components.forEach((component) => initVerticalSlider(component));

  function initVerticalSlider(component: HTMLDivElement) {
    const splide = new Splide(component, {
      direction: 'ttb',
      height: calculateHeight(component),
      type: 'loop',
      perMove: 1,
      autoplay: false,
      pagination: false,
      arrows: true,
      drag: false,
    });

    function calculateHeight(component: HTMLDivElement) {
      const perPage = Number(component.dataset.perPage) || 3,
        slide = component.querySelector<HTMLDivElement>('.vertical-slider_slide'),
        height = slide ? slide.offsetHeight * perPage : '38rem';

      return height;
    }

    splide.mount();
  }
};
