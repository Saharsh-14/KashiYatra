import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

/**
 * The universal way back to the landing (task.md TASK 14.1, TASK 5.3).
 *
 * Every chapter that is its own route must offer this, and it must be the same
 * control everywhere — a chapter that invents its own return is how a site
 * stops feeling like one experience (rules.md §28).
 *
 * It is a real anchor to `ROUTES.kashi`, so browser history, middle-click and
 * "open in new tab" all behave normally (rules.md §27, §29). There is no click
 * handler and no router interception: navigation is never hijacked to force an
 * animation.
 */
export function BackToLanding({ className }: { className?: string }) {
  return (
    <Link
      href={ROUTES.kashi}
      className={cn(
        "u-transition-colors type-ui inline-flex items-center gap-3",
        "text-content-secondary hover:text-content-primary",
        className,
      )}
    >
      <ArrowLeft aria-hidden="true" strokeWidth={1} size={18} />
      Back to Landing
    </Link>
  );
}
