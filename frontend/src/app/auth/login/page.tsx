"use client"

import { LoginForm } from "@/components/login-form";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#0a0a0a] p-6 md:p-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-150 rounded-full bg-red-500/3 blur-[120px]" />
      <div className="relative z-10 flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center text-2xl font-bold tracking-tight text-white transition-opacity hover:opacity-80">
          <Image
            src="/logo.svg"
            alt="HabitRoast Logo"
            width={100}
            height={100}
            className="h-fit w-48"
          />
        </Link>
        <LoginForm />
      </div>
    </div>
  )
}

export default page;