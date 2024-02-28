import axios from "axios";

import { StoryProps } from "../types/types";

export const getStoriesIds = async (): Promise<number[] | undefined> => {
  try {
    const { data } = await axios.get(import.meta.env.VITE_NEW_STORIES_URL);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getStory = async (
  storyId: number
): Promise<StoryProps | undefined> => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_STORY_URL}/${storyId}.json`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
