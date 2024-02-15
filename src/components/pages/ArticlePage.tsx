import { FC, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadArticle } from "../../redux/newsSlice";
import { fetchComments, fetchStory } from "../../redux/newsActions";
import { constants } from "../../constants";
import { Loader } from "../Loader";
import { Article } from "../Article";
import { MemoizedButton } from "../Button";
import { CommentsList } from "../CommentsList";
import { ErrorNotification } from "../ErrorNotification";

export const ArticlePage: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { stories, isArticleLoading, areCommentsLoading, article, comments } =
    useAppSelector(state => state.news);

  const { notification } = useAppSelector(state => state.error);
  const getStory = stories.find(story => story.id === Number(id));

  const loadComments = useCallback(() => {
    if (article !== null && article.kids) {
      dispatch(fetchComments());
    }
  }, [dispatch, article]);

  useEffect(() => {
    if (getStory) {
      dispatch(loadArticle(getStory));
    } else {
      dispatch(fetchStory(Number(id)));
    }
  }, [getStory, dispatch, id]);

  useEffect(() => {
    loadComments();
  }, [loadComments]);

  return (
    <>
      {notification && (
        <ErrorNotification
          title={notification.title}
          message={notification.message}
        />
      )}
      {article !== null && (
        <section className="flex flex-col items-center justify-center w-full z-10">
          {isArticleLoading ? <Loader /> : <Article {...article} />}
        </section>
      )}

      {article !== null && article.kids && (
        <>
          <div className="flex flex-col justify-center items-center">
            <MemoizedButton
              onClick={loadComments}
              text={constants.UPDATE_COMMENTS}
              className="flex items-center p-4 h-6 m-3 border-2 border-solid rounded-2xl text-center leading-8 transition ease-in-out delay-100  bg-orange-700 hover:bg-orange-400"
            />
          </div>

          <section>
            {areCommentsLoading ? (
              <Loader />
            ) : (
              <CommentsList comments={comments} />
            )}
          </section>
        </>
      )}
    </>
  );
};
