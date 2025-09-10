import { ClientRoutes } from "@/constants/routes";
import { redirect } from "next/navigation";

export default function Dashboard() {
  redirect(ClientRoutes.MARKETING);
}
