import { MouseEventHandler } from "react";

export interface ButtonProps {
  active?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
