export type ButtonProps = {
  isBlackButton?: boolean;
  primary?: boolean;
  secondary?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isCompact?: boolean;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
