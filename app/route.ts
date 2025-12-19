import { redirect } from "next/navigation";

export async function GET() {
  redirect(process.env.BASE_REDIRECT_URL || "/admin");
}
