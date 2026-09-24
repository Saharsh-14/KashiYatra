/**
 * Application routes definitions
 */

export const ROUTES = {
  home: "/",
  enter: "/enter",
  kashi: "/kashi",
  ghats: "/ghats",
  ghatDetail: (slug: string) => `/ghats/${slug}`,
  story: "/story",
  temples: "/temples",
  templeDetail: (slug: string) => `/temples/${slug}`,
  unfolded: "/unfolded",
  posterDetail: (slug: string) => `/unfolded/${slug}`,
  rasoi: "/rasoi",
  spirit: "/spirit",
} as const;
