import styles from "../landing.module.css";

/**
 * Scroll cue for the hero.
 *
 * A real anchor rather than a button: this navigates to a place on the page, so
 * it behaves correctly with keyboard, middle-click and "open in new tab", and it
 * still works with JavaScript disabled (rules.md §58, §27). Lenis picks up the
 * anchor click itself — see `anchors` in `lib/animation.ts`.
 */
interface ScrollCueProps {
  target: string;
  className?: string;
  tone?: "dark" | "light";
}

export function ScrollCue({ target, className = "", tone = "dark" }: ScrollCueProps) {
  const isLightTone = tone === "light";

  return (
    <a
      href={`#${target}`}
      className={`inline-flex flex-col items-center gap-2 type-ui text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
        isLightTone
          ? "text-[#D6CEBE]/80 hover:text-[#FAF6F0]"
          : "text-slate-600 hover:text-slate-900"
      } ${className}`}
    >
      Scroll
      <span
        className={`relative block h-8 w-[1px] overflow-hidden ${
          isLightTone ? "bg-white/20" : "bg-slate-300"
        }`}
      >
        <span className="absolute inset-x-0 top-0 h-1/2 bg-[#B59A63] animate-pulse" />
      </span>
    </a>
  );
}
