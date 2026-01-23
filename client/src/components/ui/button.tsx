import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsAnchor | ButtonAsButton;

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[hsl(var(--accent-from))] text-black hover:brightness-110 focus-visible:outline-[hsl(var(--accent-from))]",
  outline:
    "border border-white/15 text-white/80 hover:border-white/30 hover:text-white focus-visible:outline-white/40",
  ghost:
    "text-white/70 hover:text-white hover:bg-white/5 focus-visible:outline-white/30",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "type-xs px-4 py-2 uppercase tracking-[0.2em]",
  md: "type-sm px-5 py-2.5",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if ("href" in props) {
    const { href, ...anchorProps } =
      rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } =
    rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
