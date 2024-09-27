import Splide from '@splidejs/splide';

export const radians = () => {
  // eslint-disable-next-line no-console
  console.log('radians');

  const component = document.querySelector<HTMLDivElement>('.radians-slider_component');
  if (!component) return;

  const splide = new Splide(component, {
    type: 'loop',
    focus: 'center',
    fixedWidth: '50%',
    perPage: 3,
    autoplay: false,
    pagination: true,
    arrows: true,
  });

  splide.on('mounted', formatSplide);
  splide.on('move', formatSplide);
  splide.on('moved', formatSplide);
  splide.mount();

  function formatSplide() {
    const prevIndex = splide.Components.Controller.getPrev();
    const currentIndex = splide.Components.Controller.getIndex();
    const nextIndex = splide.Components.Controller.getNext();

    // const prev = splide.Components.Elements.slides;

    formatImage(prevIndex, 'is-before');
    formatImage(currentIndex, 'is-active');
    formatImage(nextIndex, 'is-after');
  }

  function formatImage(index: number, className: 'is-before' | 'is-active' | 'is-after') {
    const { slides } = splide.Components.Elements;
    const slide = slides[index];
    const image = slide.querySelector('img');
    if (!image) return;

    image.classList.remove('is-before', 'is-active', 'is-after');
    image.classList.add(className);
  }
};
