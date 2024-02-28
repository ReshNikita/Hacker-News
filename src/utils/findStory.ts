import { StoryProps } from "../types/types";

export const findStory = (stories: StoryProps[], id: string | undefined) =>
  stories.find(story => story.id === Number(id));
