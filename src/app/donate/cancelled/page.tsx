import { redirect } from "next/navigation";

export default function DonateCancelledRedirect() {
  redirect("/donate?cancelled=true");
}
