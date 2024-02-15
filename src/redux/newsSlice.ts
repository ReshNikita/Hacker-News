import { Nullable } from "../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoryProps } from "../types/types";

type InitialStateProps = {
  stories: StoryProps[];
  article: Nullable<StoryProps>;
  comments: StoryProps[];
  subComments: StoryProps[];
  areStoriesLoading: boolean;
  areCommentsLoading: boolean;
  isArticleLoading: boolean;
};

const initialState: InitialStateProps = {
  stories: [],
  article: null,
  comments: [],
  subComments: [],
  areStoriesLoading: true,
  areCommentsLoading: true,
  isArticleLoading: true,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    loadStories(state, action: PayloadAction<StoryProps[]>) {
      const storiesData = action.payload;
      const filteredStories = storiesData.filter(item => item !== null);
      state.stories = filteredStories;
      state.areStoriesLoading = false;
    },
    loadArticle(state, action: PayloadAction<Nullable<StoryProps>>) {
      state.article = action.payload;
      state.isArticleLoading = false;
    },
    loadComments(state, action: PayloadAction<StoryProps[]>) {
      state.comments = action.payload;
      state.areCommentsLoading = false;
    },
    loadSubComments(state, action: PayloadAction<StoryProps>) {
      state.subComments = [...state.subComments, action.payload];
    },
    resetNews(state) {
      state.stories = [];
      state.areStoriesLoading = true;
    },
    resetArticle(state) {
      state.article = null;
      state.comments = [];
      state.subComments = [];
      state.isArticleLoading = true;
      state.areCommentsLoading = true;
    },
    resetComments(state) {
      state.comments = [];
      state.subComments = [];
      state.areCommentsLoading = true;
    },
  },
});

export const {
  loadStories,
  loadComments,
  loadSubComments,
  loadArticle,
  resetNews,
  resetArticle,
  resetComments,
} = newsSlice.actions;
