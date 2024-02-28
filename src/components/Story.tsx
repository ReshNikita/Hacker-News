import { FC, memo } from "react";

import { StoryContent } from "./StoryContent";

import { constants } from "../constants";
import { useNavigateHook } from "../hooks/useNavigateHook";

type TStory = {
  id: number;
  time: number;
  text: string;
  kids: number[];
};

export const Story: FC<TStory> = memo(story => {
  const { getNavigation } = useNavigateHook();

  return (
    <li
      className="flex flex-col justify-evenly my-3 mx-3 pl-2  h-auto w-1/2 bg-header-gray opacity-90 hover:opacity-100 hover:shadow-4xl shadow-shadow-color"
      onClick={() => getNavigation(`${constants.BASE_URL}/article/${story.id}`)}
    >
      <StoryContent {...story} />
    </li>
  );
});
