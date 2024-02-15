import { StoryProps } from "../types/types";

export const getSortByDate = (a: StoryProps, b: StoryProps): number =>
  a.time - b.time;
