import { FC } from "react";

import { useNavigate } from "react-router-dom";
import { constants } from "../constants";
import { StoryProps } from "../types/types";
import { MemoizedButton } from "./Button";
import { Story } from "./Story";

export const Article: FC<StoryProps> = ({ ...article }) => {
  const navigate = useNavigate();

  const getBack = (): void => navigate("/Hacker-News");

  return (
    <>
      <div className="flex justify-center mt-28">
        <MemoizedButton
          onClick={getBack}
          text={constants.BACK_BUTTON}
          className="flex items-center p-4 h-6 border-2 border-solid rounded-2xl text-center leading-8 transition ease-in-out delay-100  bg-orange-700 hover:bg-orange-400"
        />
      </div>
      <div className="flex justify-center w-full mt-32 z-20 text-yellow-50">
        <Story {...article} />
      </div>
      <a
        href={article?.url}
        target="_blank"
        className="opacity-100 underline underline-offset-4 active:text-orange-300 hover:decoration-orange-700 hover:text-orange-700 "
      >
        {constants.READ_SOURCE}
      </a>
    </>
  );
};
