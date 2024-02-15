import { FC, memo } from "react";

type ButtonProps = {
  text: string;
  disabled?: boolean;
  onClick: () => Promise<void> | void;
  className: string;
};

const Button: FC<ButtonProps> = ({ text, disabled, onClick, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={className}
    disabled={disabled}
  >
    {text}
  </button>
);

export const MemoizedButton = memo(Button);
