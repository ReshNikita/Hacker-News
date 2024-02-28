const START_INDEX_DEFAULT = 0;
const END_INDEX_DEFAULT = 3;

export const getSlicedNews = (
  array: number[],
  start = START_INDEX_DEFAULT,
  end = END_INDEX_DEFAULT
): number[] => array.slice(start, end);
