import { useState, useEffect } from "react";
import { constants } from "../constants";
import { debounce } from "../utils/debounce";

export const useInfiniteScroll = (): { count: number } => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(constants.STORIES_INCREMENT);

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return false;
    }

    setIsLoading(true);
  }, 500);

  useEffect(() => {
    if (!isLoading) return;

    if (count + constants.STORIES_INCREMENT >= constants.MAX_STORIES) {
      setCount(constants.MAX_STORIES);
    } else {
      setCount(count + constants.STORIES_INCREMENT);
    }

    setIsLoading(false);
  }, [isLoading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { count };
};
