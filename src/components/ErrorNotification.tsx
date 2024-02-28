import { FC } from "react";

import { ErrorProps } from "../types/types";

export const ErrorNotification: FC<ErrorProps> = ({ title, message }) => (
  <section>
    <h2>{title}</h2>
    <p>{message}</p>
  </section>
);
