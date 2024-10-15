import Splide from '@splidejs/splide';

import { log } from '$utils/log';

export const careerSS = () => {
  log('careerSS');

  const components = document.querySelectorAll<HTMLDivElement>('.career-ss_slider');
  components.forEach((component) => initCareerSSSlider(component));

  function initCareerSSSlider(component: HTMLDivElement) {
    const splide = new Splide(component, {
      type: 'slider',
      gap: '1.25rem',
      perPage: 3,
      perMove: 1,
      breakpoints: {
        991: {
          perPage: 2,
        },
        767: {
          perPage: 1,
        },
      },
    });

    splide.mount();
  }
};
