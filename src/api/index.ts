import axios from "axios";

import { StoryProps } from "../types/types";

export const baseUrl: string = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl: string = `${baseUrl}newstories.json`;
export const storyUrl: string = `${baseUrl}item/`;

export const getStoriesIds = async (): Promise<number[]> =>
  await axios
    .get(newStoriesUrl)
    .then(({ data }) => data)
    .catch(error => console.log(error));

export const getStory = async (storyId: number): Promise<StoryProps> =>
  await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data)
    .catch(error => console.log(error));
