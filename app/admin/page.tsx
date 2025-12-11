import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await auth();

  if (session) {
    return (
      <div>
        <h1>Admin Page</h1>
      </div>
    );
  } else {
    redirect("/admin/login");
  }
}
