import { FC } from "react";
import { constants } from "../constants";
import { getDate } from "../utils/getDate";
import { StoryProps } from "../types/types";

export const StoryContent: FC<StoryProps> = ({
  title,
  by,
  time,
  score,
  descendants,
}) => {
  return (
    <>
      {title && <h2>{title}</h2>}

      <span className="text-sm text-gray-500">
        {constants.PREPOSITION_BY} <span className="italic">{by}</span>
      </span>

      <span>
        {constants.RATING} {score} &#124; {constants.COMMENTS} {descendants}
      </span>
      <time className="text-gray-300">{getDate(time)}</time>
    </>
  );
};
