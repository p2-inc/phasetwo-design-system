import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

export type TextInputProps = {
  inputArgs?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  icon?: "search" | React.ReactElement;
  className?: string;
};
