import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { toneClass, type TypographyTone } from "@/components/typography/tone";
import styles from "./TextLink.module.css";

export interface TextLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "color"> {
  href: string;
  /**
   * `hover` — the underline appears on hover/focus. Right for navigation
   *           where the affordance is clear from context.
   * `always` — the underline is permanent. Required for inline links inside
   *           running copy, and for any link on a touch device where hover
   *           does not exist (rules.md §37).
   */
  underline?: "hover" | "always";
  tone?: TypographyTone;
  size?: "body" | "ui";
}

function isExternal(href: string): boolean {
  return /^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("//");
}

/**
 * TextLink (design.md §47; rules.md §58).
 *
 * Navigation renders an anchor — never a clickable `<div>` — so middle-click,
 * new tab, and browser history behave normally (rules.md §27, §29).
 */
export function TextLink({
  href,
  underline = "hover",
  tone = "primary",
  size = "ui",
  className,
  children,
  ...props
}: TextLinkProps) {
  const classes = cn(
    styles.link,
    underline === "always" && styles.alwaysUnderlined,
    size === "ui" ? "type-ui" : "type-body",
    toneClass(tone),
    className,
  );

  if (isExternal(href)) {
    return (
      <a
        href={href}
        className={classes}
        rel="noreferrer noopener"
        target="_blank"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
