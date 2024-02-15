export const getDate = (time: number): string =>
  new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "medium",
  }).format(new Date(time * 1000));
