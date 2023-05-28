import { RoleBadgeProps as Props } from "./Badges.types";

const RoleBadge = ({ name }: Props) => {
  let roleBg = "";
  if (name.startsWith("manage-")) {
    roleBg = "bg-[#C07CE0]";
  } else if (name.startsWith("view-")) {
    roleBg = "bg-[#7CE0C3]";
  }

  return (
    <span className="flex items-center space-x-2 px-1 py-1">
      <span
        className={`inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full ${roleBg}`}
      />
      <span className="inline-block text-sm dark:text-zinc-200">{name}</span>
    </span>
  );
};

export default RoleBadge;
