import { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button" 
// import { UserAuthForm } from "@/components/user-auth-form"
import { ChevronLeft } from "lucide-react"
import { LoginForm } from "@/components/auth/login-form"


export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
     <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute left-4 top-4 md:left-8 md:top-8"
          )}
        >
          <>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </>
        </Link>
        {/* <UserAuthForm /> */}
        <LoginForm/>
    </div>
  )
}