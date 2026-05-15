import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
import { Fragment } from "react/jsx-runtime";

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
    href?: string;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "group flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-2 gap-6 pr-6",
          itemsWrapperClassName,
          "group-hover:[animation-play-state:paused]",
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map((item) => {
              const classes =
                "inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg transition-transform duration-200 hover:scale-110";
              const inner = (
                <>
                  <TechIcon component={item.iconType} />
                  <span className="font-semibold">{item.title}</span>
                </>
              );
              return item.href ? (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes}
                >
                  {inner}
                </a>
              ) : (
                <div key={item.title} className={classes}>
                  {inner}
                </div>
              );
            })}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
