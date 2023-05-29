import cs from "classnames";
import { RHFTextInputProps as Props } from "./RHFTextInput.types";
import { BasicFormClasses } from "../Text/TextInput";

const RHFFormTextInputWithLabel = ({
  slug = "",
  label = "",
  inputArgs = {},
  register,
  registerArgs = {},
  error,
}: Props) => {
  return (
    <div className="sm:col-span-3">
      <label
        htmlFor={slug}
        className="block text-sm font-medium text-gray-700 dark:text-zinc-200"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          type="text"
          id={slug}
          className={cs(
            BasicFormClasses,
            "block w-full rounded-md border-gray-300 focus:border-transparent focus:ring-[#134FC2] sm:text-sm",
            {
              "border-pink-500 text-pink-600 focus:border-pink-500 focus:ring-pink-500":
                error,
            }
          )}
          placeholder="placeholder"
          {...register(slug, registerArgs)}
          {...inputArgs}
        />
      </div>
    </div>
  );
};

export default RHFFormTextInputWithLabel;
