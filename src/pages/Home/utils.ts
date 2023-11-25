export const getItemsPerPage = (
  items: unknown[],
  size: number,
  pageNumber: number
) => {
  const startIndex = (pageNumber - 1) * size;
  const endIndex = startIndex + size;

  return items.slice(startIndex, endIndex);
};
