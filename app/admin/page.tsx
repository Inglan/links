import { auth, signOut } from "@/auth";
import CreateLink from "@/components/create-link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await auth();

  if (session) {
    return (
      <div className="p-2">
        <div className="w-full max-w-xl mx-auto flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <Button size="sm">links</Button>
            <div className="grow"></div>
            <Button size="sm" variant="ghost"></Button>
            <Image
              src={session.user?.image || ""}
              alt={session.user?.name || ""}
              width={32}
              height={32}
              className="border"
            />
            {/*<Button size="sm" variant="outline">
              {session.user?.name}
            </Button>
            <form
              action={async () => {
                "use server";
                await signOut({ redirect: true, redirectTo: "/" });
              }}
            >
              <Button variant="outline" size="sm" type="submit">
                logout
              </Button>
            </form>*/}
          </div>
          <CreateLink />
        </div>
      </div>
    );
  } else {
    redirect("/admin/login");
  }
}
