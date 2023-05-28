import { GenericBadgeProps as Props } from "./Badges.types";

const SquareBadge = ({ children, className }: Props) => {
  return (
    <span
      className={`${className} rounded border border-p2gray-900 px-1 py-px font-mono text-xs font-medium`}
    >
      {children}
    </span>
  );
};

export default SquareBadge;
