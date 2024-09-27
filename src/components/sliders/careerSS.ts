import Splide from '@splidejs/splide';

export const careerSS = () => {
  // eslint-disable-next-line no-console
  console.log('careerSS');

  const component = document.querySelector<HTMLDivElement>('.career-ss_slider');
  if (!component) return;

  const splide = new Splide(component, {
    type: 'slider',
    gap: '1.25rem',
    perPage: 3,
    perMove: 1,
    // autoplay: false,
    // pagination: false,
    // arrows: true,
    breakpoints: {
      991: {
        perPage: 2,
      },
      767: {
        perPage: 1,
      },
    },
  });

  console.log('before');
  splide.mount();
  console.log('after');

  console.log(splide);
};
