import { auth, signIn } from "@/lib/auth";
import Link from "next/link";

export async function ProfileButton() {
  const session = await auth()

  if (!session?.user) return <LoginButton />

  return <Link href="/profile" className="button flex items-center gap-2">
    <img alt="profile picture" src={session.user.image} className="rounded-full w-6 h-6" />
    {session.user.name}
  </Link>
}

function LoginButton() {
  async function login() {
    "use server"
    await signIn("google")
  }

  return <form action={login} >
    <button type="submit" className="button button-red">Inloggen</button>
  </form>
}