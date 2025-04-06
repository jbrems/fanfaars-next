import Link from "next/link";
import { ProfileButton } from "./profile-button/ProfileButton";

export function Header() {
  return <header className="flex items-center border-b-1 border-neutral-400 p-4">
    <Link href="/"><div className="h-10 w-50 bg-neutral-400" /></Link>
    <div className="grow-1" />
    <ProfileButton />
  </header>
}