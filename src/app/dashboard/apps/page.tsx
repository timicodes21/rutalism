import { ClientRoutes } from "@/constants/routes";
import { redirect } from "next/navigation";

export default function Apps() {
  redirect(ClientRoutes.EMAIL_INBOX);
}
