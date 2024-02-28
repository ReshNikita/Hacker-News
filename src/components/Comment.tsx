import { FC, useEffect, useState } from "react";

import { CommentsList } from "./CommentsList";
import { Button } from "./Button";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchSubComments } from "../redux/newsActions";

import { getDate } from "../utils/getDate";
import { cleanHtml } from "../utils/cleanHtml";
import { filterSubComments } from "../utils/filterSubComments";
import { Falsy, StoryProps } from "../types/types";
import { constants } from "../constants";

type TComment = {
  comment: StoryProps;
};

export const Comment: FC<TComment> = ({ comment }) => {
  const [areSubCommentsVisible, setAreSubCommentsVisible] =
    useState<boolean>(false);

  const showSubComments = (): void =>
    setAreSubCommentsVisible(!areSubCommentsVisible);

  const { text, by, time, id, kids, dead, deleted } = comment;

  const dispatch = useAppDispatch();
  const { subComments } = useAppSelector(state => state.news);

  const html: string = cleanHtml(text);

  useEffect(() => {
    if (kids) {
      dispatch(fetchSubComments(kids));
    }
  }, [dispatch, kids]);

  // const filtredSubComments = subComments.filter(item => item.parent === id);
  const filtredSubComments = filterSubComments(subComments, id);

  const deadComments: Falsy<JSX.Element> = dead && (
    <p className="italic text-neutral-600">{constants.DEAD_COMMENT}</p>
  );

  const deletedComments: Falsy<JSX.Element> = deleted && (
    <p className="italic text-neutral-600">{constants.DELELTED_COMMENT}</p>
  );

  return (
    <div className="flex flex-col justify-center items-center bg-header-gray">
      <section className="flex flex-col flex-wrap p-2">
        <span className="text-sm text-gray-500">
          {constants.PREPOSITION_BY} <span className="italic">{by}</span>
        </span>
        {text === "[dead]" ? (
          <p className="italic text-neutral-600">{text}</p>
        ) : (
          <p dangerouslySetInnerHTML={{ __html: html }} />
        )}

        <p className="italic">
          {constants.POSTED_ON}
          {getDate(time)}
        </p>
        {deadComments}
        {deletedComments}

        {kids && (
          <Button
            text={`Show  ${areSubCommentsVisible ? "less [-]" : "more [+]"} `}
            onClick={showSubComments}
            className="pt-2 underline hover:text-orange-700"
          />
        )}
        {kids && (
          <div className={areSubCommentsVisible ? "flex pl-6" : "hidden"}>
            <CommentsList comments={filtredSubComments} />
          </div>
        )}
      </section>
    </div>
  );
};
