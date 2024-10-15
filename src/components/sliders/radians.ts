import Splide from '@splidejs/splide';

import { log } from '$utils/log';

export const radians = () => {
  log('radians');

  const components = document.querySelectorAll<HTMLDivElement>('.radians-slider_component');
  components.forEach((component) => initRadiansSlider(component));

  function initRadiansSlider(component: HTMLDivElement) {
    const splide = new Splide(component, {
      type: 'loop',
      focus: 'center',
      fixedWidth: '50%',
      perPage: 3,
      autoplay: false,
      pagination: true,
      arrows: true,
    });

    splide.on('mounted', () => formatSplide(splide));
    splide.on('move', () => formatSplide(splide));
    splide.on('moved', () => formatSplide(splide));
    splide.mount();
  }

  function formatSplide(splide: Splide) {
    const prevIndex = splide.Components.Controller.getPrev();
    const currentIndex = splide.Components.Controller.getIndex();
    const nextIndex = splide.Components.Controller.getNext();

    // const prev = splide.Components.Elements.slides;

    formatImage(splide, prevIndex, 'is-before');
    formatImage(splide, currentIndex, 'is-active');
    formatImage(splide, nextIndex, 'is-after');
  }

  function formatImage(
    splide: Splide,
    index: number,
    className: 'is-before' | 'is-active' | 'is-after'
  ) {
    const { slides } = splide.Components.Elements;
    const slide = slides[index];
    const image = slide.querySelector('img');
    if (!image) return;

    image.classList.remove('is-before', 'is-active', 'is-after');
    image.classList.add(className);
  }
};
