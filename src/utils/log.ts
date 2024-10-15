export const log = (message: string) => {
  if (!window.location.href.includes('.webflow.io')) return;
  console.log(message);
};
