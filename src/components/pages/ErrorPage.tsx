import { FC } from "react";
import { constants } from "../../constants";

type Error = {
  error: {
    message: string;
  };
};

export const ErrorPage: FC<Error> = ({ error }) => (
  <div role="alert">
    <h1>{constants.ERROR}</h1>
    <p>{error.message}</p>
  </div>
);
