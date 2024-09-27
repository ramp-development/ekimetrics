import Splide from '@splidejs/splide';

export const timeline = () => {
  // eslint-disable-next-line no-console
  console.log('timeline');

  const component = document.querySelector<HTMLDivElement>('.timeline-slider_component');
  if (!component) return;

  const splide = new Splide(component, {
    type: 'slider',
    focus: 'center',
    perPage: 3,
    perMove: 1,
    autoplay: false,
    pagination: false,
    arrows: true,
    breakpoints: {
      991: {
        // focus: 0,
        perPage: 2,
      },
      767: {
        perPage: 1,
      },
    },
  });

  splide.mount();
};
