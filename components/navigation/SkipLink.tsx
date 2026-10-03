/**
 * Skip to content (task.md TASK 16.2).
 *
 * Without it, a keyboard user must tab through the section rail and every
 * chapter entry before reaching the page's own content — on a single-page
 * landing that is a long way. The link is the first focusable element in the
 * document and targets `#main`, which every route's `<main>` carries.
 *
 * Styling lives in `styles/utilities.css` as `.u-skip-link`: it is off-screen
 * until focused, then becomes a fully visible, high-contrast control. It is
 * never merely hidden (rules.md §59 — focus must always be visible).
 */
export function SkipLink() {
  return (
    <a href="#main" className="u-skip-link type-ui">
      Skip to content
    </a>
  );
}
