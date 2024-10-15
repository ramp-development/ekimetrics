import Splide from '@splidejs/splide';

import { log } from '$utils/log';

export const timeline = () => {
  log('timeline');

  const components = document.querySelectorAll<HTMLDivElement>('.timeline-slider_component');
  components.forEach((component) => initTimelineSlider(component));

  function initTimelineSlider(component: HTMLDivElement) {
    const splide = new Splide(component, {
      type: 'slider',
      focus: 'center',
      perPage: 3,
      perMove: 1,
      gap: '1rem',
      padding: '0%',
      autoplay: false,
      pagination: false,
      arrows: true,
      breakpoints: {
        991: {
          // focus: 0,
          // perPage: 2,
        },
        767: {
          perPage: 1,
          padding: '25%',
        },
        479: {
          perPage: 1,
          padding: '15%',
        },
      },
    });

    splide.mount();
  }
};
