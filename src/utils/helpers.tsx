export const uniqueID = () => {
  const math = Math.random();
  const date = Date.now();
  return Math.floor(date * math);
};
