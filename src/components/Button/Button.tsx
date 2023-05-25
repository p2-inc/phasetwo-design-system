import React from "react";
import { ButtonProps } from "./Button.types";
import cs from "classnames";

const Button: React.FC<ButtonProps> = ({
  active,
  disabled,
  onClick,
  children,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={cs(
        active
          ? "bg-gray-100 text-gray-900"
          : "text-gray-700 dark:text-zinc-200",
        "block w-full px-4 py-2 text-left text-sm ",
        {
          "opacity-50 hover:cursor-not-allowed": disabled,
        }
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
