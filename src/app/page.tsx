import { auth, signIn, signOut } from "@/lib/auth";

export default async function Home() {
  const session = await auth()

  if (!session?.user) return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit">Inloggen</button>
    </form>
  );

  return <div>
    <pre>
      {JSON.stringify(session.user, null, 2)}
    </pre>
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit">Uitloggen</button>
    </form>
  </div>
}
