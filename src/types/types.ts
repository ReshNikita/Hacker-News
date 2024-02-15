export type StoryProps = {
  by?: string;
  descendants?: number;
  id: number;
  kids: number[];
  score?: number;
  time: number;
  title?: string;
  type?: string;
  url?: string;

  parent?: number;
  text: string;
  dead?: boolean;
  deleted?: boolean;
};

export type Nullable<T> = T | null;

export type ErrorProps = {
  title: string;
  message: string;
};
