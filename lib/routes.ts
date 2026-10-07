/**
 * Route constants (architecture.md §14–§21).
 *
 * Routes are declared once here so navigation data, redirects and
 * "back to landing" controls can never drift apart.
 */
export const ROUTES = {
  home: "/",
  enter: "/enter",
  kashi: "/kashi",
  ghats: "/ghats",
  story: "/story",
  temples: "/temples",
  whereGodsReside: "/where-gods-reside",
  unfolded: "/unfolded",
  rasoi: "/rasoi",
  kashiRasoi: "/kashi-rasoi",
  spirit: "/spirit",
} as const;

export type RouteKey = keyof typeof ROUTES;

/** Landing route — every chapter returns here (rules.md §28, task.md §14.1). */
export const LANDING_ROUTE = ROUTES.kashi;

export function ghatRoute(slug: string): string {
  return `${ROUTES.ghats}/${slug}`;
}

export function templeRoute(slug: string): string {
  return `${ROUTES.temples}/${slug}`;
}

export function posterRoute(slug: string): string {
  return `${ROUTES.unfolded}/${slug}`;
}

export function kashiRasoiRoute(slug: string): string {
  return `${ROUTES.kashiRasoi}/${slug}`;
}
