import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import cs from "classnames";
import { TextInputProps as Props } from "./TextInput.types";

export const BasicFormClasses =
  "block rounded border border-gray-300 dark:border-zinc-600 dark:text-zinc-200 sm:text-sm bg-white dark:bg-p2dark-1000 disabled:opacity-50 disabled:cursor-not-allowed hover:border-gray-500 transition";

const TextInput = ({ inputArgs = {}, className, icon: iconArg }: Props) => {
  let icon = iconArg;
  if (iconArg === "search") {
    icon = (
      <MagnifyingGlassIcon
        className="h-5 w-5 text-p2blue-900"
        aria-hidden="true"
      />
    );
  }

  return (
    <div className={`relative rounded-md ${className}`}>
      {icon && (
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {icon}
        </div>
      )}

      <input
        type="text"
        name="input"
        id="input"
        className={cs("w-full", BasicFormClasses, {
          "pl-10": icon,
        })}
        {...inputArgs}
      />
    </div>
  );
};

export default TextInput;
