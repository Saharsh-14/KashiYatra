import { redirect } from "next/navigation";
import { ROUTES } from "@/lib/routes";

export default function GhatsRootPage() {
  redirect(`${ROUTES.kashi}#steps-to-eternity`);
}
