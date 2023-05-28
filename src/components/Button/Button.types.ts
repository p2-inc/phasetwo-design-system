import { MouseEventHandler } from "react";

export interface Props {
  active?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
