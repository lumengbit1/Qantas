export const sizeToPagination = (size: number, number: number): number[] => {
  const pagination = number !== 0 ? Math.abs(Math.ceil(size / number)) : 1;
  const paginationArray = Array(pagination).fill(1);

  return paginationArray;
};
