import { auth, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth()

  if (!session?.user) redirect('/')

  async function logout() {
    "use server"
    await signOut()
  }

  return <div className="flex flex-col items-center gap-4">
    <pre>{JSON.stringify(session?.user, null, 2)}</pre>
    <form action={logout} >
      <button type="submit" className="button button-red">Uitloggen</button>
    </form>
  </div>
}