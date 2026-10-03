import { redirect } from "next/navigation";
import { ROUTES } from "@/lib/routes";

/**
 * Root entry (architecture.md §14.1).
 *
 * The approved flow is ` / → The Infinite Door → /kashi `. The opening is a
 * separate route at `/enter` and is built in TASK 3.x, so until then the root
 * hands the visitor straight to the landing.
 *
 * When TASK 3.1 lands, this becomes `redirect(ROUTES.enter)` and nothing else
 * in the application has to change.
 */
export default function RootPage() {
  redirect(ROUTES.kashi);
}
