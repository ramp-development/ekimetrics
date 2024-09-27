import Splide from '@splidejs/splide';

export const vertical = () => {
  // eslint-disable-next-line no-console
  console.log('vertical');

  const component = document.querySelector<HTMLDivElement>('.vertical-slider_component');
  if (!component) return;

  const splide = new Splide(component, {
    direction: 'ttb',
    height: calculateHeight(component),
    type: 'loop',
    perMove: 1,
    autoplay: false,
    pagination: false,
    arrows: true,
  });

  function calculateHeight(component: HTMLDivElement) {
    const perPage = Number(component.dataset.perPage) || 3,
      slide = component.querySelector<HTMLDivElement>('.vertical-slider_slide'),
      height = slide ? slide.offsetHeight * perPage : '38rem';

    return height;
  }

  splide.mount();
};
