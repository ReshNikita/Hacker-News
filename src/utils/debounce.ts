export const debounce = (
  func: () => void,
  wait: number,
  immediate?: number,
  args?: any
): (() => void) => {
  let timeout: any;

  return () => {
    const context = this;
    const callNow = immediate && !timeout;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};
