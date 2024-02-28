import { FC } from "react";

import { StoryProps } from "../types/types";
import { Comment } from "./Comment";

type TCommentsList = {
  comments: StoryProps[];
};

export const CommentsList: FC<TCommentsList> = ({ comments }) => (
  <ul className="flex flex-col items-center">
    {comments?.map(comment => (
      <li className="m-3" key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))}
  </ul>
);
