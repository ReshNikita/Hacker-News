import { AppDispatch, RootState } from "./store";
import { getStory, getStoriesIds } from "../api";
import { constants } from "../constants";

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

export const fetchNews =
  () =>
  async (dispatch: AppDispatch, getState: () => RootState): Promise<void> => {
    try {
      dispatch(resetNews());

      const notification = getState().error.notification;

      if (notification) {
        dispatch(resetNotification());
      }

      const newsIds = await getStoriesIds();
      const newsIdsSlice = getSlicedNews(
        newsIds,
        constants.NEWS_COUNT_START_INDEX,
        constants.NEWS_COUNT_END_INDEX
      );

      const data = await Promise.all(
        newsIdsSlice.map((id: number) => getStory(id))
      );

      dispatch(loadStories(data));
    } catch (error) {
      dispatch(
        showError({
          title: "Error!",
          message: "Fetching news failed! Please try again later.",
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

      const data = await getStory(id);
      dispatch(loadArticle(data));
    } catch (error) {
      dispatch(
        showError({
          title: "Error!",
          message: "Fetching story failed! Please try again later.",
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
      const data = await Promise.all(kidsIds.map((id: number) => getStory(id)));
      dispatch(loadComments(data));
    } catch (error) {
      dispatch(
        showError({
          title: "Error!",
          message: "Loading comments failed! Please, try again later.",
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

      const data = await Promise.all(kidsIds.map(id => getStory(id)));
      data.forEach(item => dispatch(loadSubComments(item)));
    } catch (error) {
      dispatch(
        showError({
          title: "Error!",
          message: "Loading comments failed! Please, try again later.",
        })
      );
    }
  };
