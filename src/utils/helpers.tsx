export const uniqueID = () => {
  const math = Math.random();
  const date = Date.now();
  return Math.floor(date * math);
};

export const urlId = () => {
  return +window.location.pathname.slice(1);
};
