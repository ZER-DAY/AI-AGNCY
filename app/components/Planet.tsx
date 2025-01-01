import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const classes = cva("bg-gradient-to-b animate-pulse", {
  variants: {
    size: {
      sm: "w-8 h-8",
      md: "w-12 h-12",
      lg: "w-16 h-16",
    },
    color: {
      violet: "from-violet-500 via-purple-600 to-violet-700",
      teal: "from-teal-400 via-teal-500 to-teal-600",
      fuchsia: "from-fuchsia-400 via-fuchsia-500 to-fuchsia-600",
    },
  },
  defaultVariants: {
    size: "lg",
    color: "violet",
  },
});

interface PlanetProps {
  size?: "sm" | "md" | "lg";
  color?: "violet" | "teal" | "fuchsia";
}

export const Planet = (props: PlanetProps & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={classes({
        size: props.size,
        color: props.color,
        className: props.className,
      })}
      style={{
        clipPath:
          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
      }}
    ></div>
  );
};
