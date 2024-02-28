import { StoryProps } from "../types/types";

export const filterSubComments = (
  array: StoryProps[],
  id: number
): StoryProps[] => array.filter(item => item.parent === id);
