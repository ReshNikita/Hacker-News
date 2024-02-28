import { constants } from "./../constants";
import { AppDispatch, RootState } from "./store";
import { getStory, getStoriesIds } from "../api";

import {
  loadArticle,
  loadComments,
  loadStories,
  loadSubComments,
  resetArticle,
  resetComments,
  resetNews,
} from "./newsSlice";

import { getSlicedNews } from "../utils/getSlicedNews";
import { resetNotification, showError } from "./errorSlice";
import { StoryProps } from "../types/types";

export const fetchNews =
  () =>
  async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
    try {
      dispatch(resetNews());

      const notification = getState().error.notification;

      if (notification) {
        dispatch(resetNotification());
      }

      const newsIds = (await getStoriesIds()) as number[];
      const newsIdsSlice = getSlicedNews(
        newsIds,
        constants.NEWS_COUNT_START_INDEX,
        constants.NEWS_COUNT_END_INDEX
      );

      const data = (await Promise.all(
        newsIdsSlice.map((id: number) => getStory(id))
      )) as StoryProps[];

      dispatch(loadStories(data));
    } catch (error) {
      dispatch(
        showError({
          title: constants.ERROR_TITLE,
          message: constants.FETCHING_NEWS_FAIL,
        })
      );
    }
  };

export const fetchStory =
  (id: number) =>
  async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
    try {
      dispatch(resetArticle());

      const notification = getState().error.notification;

      if (notification) {
        dispatch(resetNotification());
      }

      const data = (await getStory(id)) as StoryProps;
      dispatch(loadArticle(data));
    } catch (error) {
      dispatch(
        showError({
          title: constants.ERROR_TITLE,
          message: constants.FETCHING_STORY_FAIL,
        })
      );
    }
  };

export const fetchComments =
  () =>
  async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
    try {
      dispatch(resetComments());

      const notification = getState().error.notification;

      if (notification) {
        dispatch(resetNotification());
      }

      const kidsIds = getState().news.article?.kids as number[];
      const data = (await Promise.all(
        kidsIds.map((id: number) => getStory(id))
      )) as StoryProps[];
      dispatch(loadComments(data));
    } catch (error) {
      dispatch(
        showError({
          title: constants.ERROR_TITLE,
          message: constants.LOADING_COMMENTS_FAIL,
        })
      );
    }
  };

export const fetchSubComments =
  (kidsIds: number[]) =>
  async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
    try {
      const notification = getState().error.notification;

      if (notification) {
        dispatch(resetNotification());
      }

      const data = (await Promise.all(
        kidsIds.map(id => getStory(id))
      )) as StoryProps[];
      data.forEach(item => dispatch(loadSubComments(item)));
    } catch (error) {
      dispatch(
        showError({
          title: constants.ERROR_TITLE,
          message: constants.LOADING_COMMENTS_FAIL,
        })
      );
    }
  };
