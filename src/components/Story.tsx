import { FC } from "react";

import { useNavigate } from "react-router-dom";

import { StoryContent } from "./StoryContent";

type TStory = {
  id: number;
  time: number;
  text: string;
  kids: number[];
};

export const Story: FC<TStory> = story => {
  const navigate = useNavigate();

  return (
    <li
      className="flex flex-col justify-evenly my-3 mx-3 pl-2  h-auto w-1/2 bg-header-gray opacity-90 hover:opacity-100 hover:shadow-4xl shadow-shadow-color"
      onClick={() => navigate(`/Hacker-News/article/${story.id}`)}
    >
      <StoryContent {...story} />
    </li>
  );
};
