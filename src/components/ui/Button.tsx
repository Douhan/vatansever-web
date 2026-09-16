import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

type Variant = "primary" | "ghost";
type Size = "md" | "sm";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    to?: undefined;
  };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    to?: undefined;
  };

type ButtonAsLink = BaseProps &
  LinkProps & {
    to: LinkProps["to"];
    href?: undefined;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

function classes(variant: Variant, size: Size, className?: string) {
  return ["btn", variant === "primary" ? "btn-primary" : "btn-ghost", size === "sm" ? "btn-sm" : "", className]
    .filter(Boolean)
    .join(" ");
}

export function Button({ variant = "primary", size = "md", className, children, ...rest }: ButtonProps) {
  const cls = classes(variant, size, className);

  if ("to" in rest && rest.to !== undefined) {
    const { to, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link to={to} className={cls} {...linkRest}>
        {children}
      </Link>
    );
  }

  if ("href" in rest && rest.href !== undefined) {
    const anchorRest = rest as ButtonAsAnchor;
    return (
      <a className={cls} {...anchorRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonAsButton;
  return (
    <button className={cls} {...buttonRest}>
      {children}
    </button>
  );
}
