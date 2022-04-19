export const calculateSize = (width, sizeElement, setSize) => {
  const newSize = (width / 1920) * sizeElement;
  return width < 1920 && setSize(newSize);
};
