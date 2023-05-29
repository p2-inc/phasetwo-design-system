import cs from "classnames";
import { ButtonProps as Props } from "./Button.types";

export const ButtonIconLeftClasses = "fill-current -ml-1 mr-2 h-5 w-5";

const Button = ({
  children,
  isBlackButton,
  primary,
  secondary,
  isCompact,
  size = "md",
  className,
  ...args
}: Props) => {
  return (
    <button
      {...args}
      className={cs(
        "group",
        "inline-flex",
        "focus:shadow-sm focus:outline-1 focus:ring-1 focus:ring-neutral-50 focus:ring-offset-1",
        className
      )}
    >
      <div className="relative w-full">
        <div
          className={cs(
            "relative z-20 rounded p-px",
            "transition duration-200",
            "group-enabled:group-hover:bg-gradient-to-tl group-enabled:group-hover:from-p2grad-200 group-enabled:group-hover:via-p2grad-100 group-enabled:group-hover:to-p2grad-200",
            {
              "group-enabled:bg-p2gray-900": primary,
              "bg-neutral-300 dark:bg-zinc-600": secondary,
            }
          )}
        >
          <div
            className={cs(
              "flex items-center justify-center rounded-[3px] font-medium",
              {
                "px-4 py-2 text-sm": size === "md",
                "px-3 py-1 text-xs": size === "sm",
              },
              {
                "bg-p2gray-900 group-enabled:text-white group-enabled:group-hover:bg-p2gray-800 group-disabled:bg-neutral-400 group-disabled:text-white/50 dark:bg-white dark:group-enabled:text-zinc-800 dark:group-enabled:group-hover:bg-p2dark-1000 dark:group-enabled:group-hover:text-zinc-200":
                  primary,
                "bg-neutral-50 group-enabled:text-p2gray-900 group-disabled:text-p2gray-900/50 dark:bg-p2dark-1000 dark:group-enabled:text-zinc-200":
                  secondary,
              }
            )}
          >
            {children}
          </div>
        </div>
        <div
          className={cs(
            "absolute inset-x-3 bottom-0 z-10 h-1/2 rounded-full bg-white opacity-0",
            "transition-opacity duration-200",
            "group-active:hidden",
            {
              "drop-shadow-btn-dark": primary,
              "drop-shadow-btn-light": secondary,
            },
            {
              "group-enabled:group-hover:opacity-100": size === "md",
            }
          )}
        ></div>
      </div>
    </button>
  );
};

export default Button;
