import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetArticle } from "../../redux/newsSlice";
import { fetchNews } from "../../redux/newsActions";

import { ErrorNotification } from "../ErrorNotification";
import { StoriesContainer } from "../containers/StoriesContainer";
import { MemoizedButton } from "../Button";

import { constants } from "../../constants";

export const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const { notification } = useAppSelector(state => state.error);

  useEffect(() => {
    dispatch(resetArticle());
  }, [dispatch]);

  const updateNews = (): Promise<void> => dispatch(fetchNews());

  return (
    <main className="mt-28">
      <div className="flex justify-center mb-5">
        <MemoizedButton
          onClick={updateNews}
          text={constants.UPDATE_BUTTON}
          className="flex items-center p-4 h-6 border-2 border-solid rounded-2xl text-center leading-8 transition ease-in-out delay-100  bg-orange-700 hover:bg-orange-400"
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
