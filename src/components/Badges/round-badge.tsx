import { GenericBadgeProps as Props } from "./Badges.types";

const RoundBadge = ({ children, className }: Props) => {
  return (
    <span
      className={`${className} inline-flex flex-shrink-0 items-center rounded-full border-2 border-gray-200 bg-white px-2.5 py-0.5 text-xs font-semibold 
      text-gray-800 dark:border-zinc-600 dark:bg-p2dark-1000 dark:text-zinc-200`}
    >
      {children}
    </span>
  );
};

export default RoundBadge;
