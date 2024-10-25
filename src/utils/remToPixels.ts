export const remToPixels = (rem: number) => {
  // eslint-disable-next-line no-console
  console.log('remToPixels');

  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
  return rem * rootFontSize;
};
