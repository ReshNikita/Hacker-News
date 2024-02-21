import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetArticle } from "../../redux/newsSlice";
import { fetchNews } from "../../redux/newsActions";

import { ErrorNotification } from "../ErrorNotification";
import { StoriesContainer } from "../containers/StoriesContainer";
import { constants } from "../../constants";
import { Button } from "../Button";

export const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const { notification } = useAppSelector(state => state.error);
  const { areStoriesLoading } = useAppSelector(state => state.news);

  useEffect(() => {
    dispatch(resetArticle());
  }, [dispatch]);

  const updateNews = (): Promise<void> => dispatch(fetchNews());

  return (
    <main className="mt-28">
      <div className="flex justify-center mb-5">
        <Button
          onClick={updateNews}
          text={constants.UPDATE_BUTTON}
          className={`flex items-center p-4 h-6 border-2 border-solid rounded-2xl text-center leading-8 bg-orange-700 ${
            areStoriesLoading
              ? "disabled:opacity-75 cursor-not-allowed"
              : "transition ease-in-out delay-100 hover:bg-orange-400"
          }`}
          disabled={areStoriesLoading}
        />
      </div>
      {notification ? (
        <ErrorNotification
          title={notification.title}
          message={notification.message}
        />
      ) : (
        <StoriesContainer />
      )}
    </main>
  );
};
