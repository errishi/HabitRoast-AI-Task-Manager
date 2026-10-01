import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-white/8 bg-white/2 shadow-2xl shadow-black/50 backdrop-blur-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white">Sign In</CardTitle>
          <CardDescription className="text-white/50">
            Enter your email below to login
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel className="text-white/80" htmlFor="email">Email <span className="text-red-400">*</span></FieldLabel>
                <Input
                  className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-red-500/50"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <FieldLabel className="text-white/80" htmlFor="password">Password <span className="text-red-400">*</span></FieldLabel>
                <Input className="border-white/10 bg-white/5 text-white focus-visible:ring-red-500/50" id="password" type="password" required />
                <div className="flex justify-end mt-1">
                  <Link href="#" className="text-xs text-red-400 hover:text-red-300 font-medium">
                    Forgot password?
                  </Link>
                </div>
              </Field>
              <Field className="mt-4">
                <Button className="w-full bg-gradient-flame border-0 text-white shadow-xl shadow-red-500/20 hover:opacity-90 hover:shadow-red-500/30 transition-all" type="submit">
                  Sign In
                </Button>
                <FieldDescription className="mt-4 text-center text-white/50">
                  Don't have an account? <Link href="/auth/signup" className="text-red-400 hover:text-red-300 font-medium">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <div className="px-6 text-center text-white/30 text-xs leading-relaxed">
        By clicking continue, you agree to our{" "}
        <Link href="#" className="hover:text-white/70 underline underline-offset-4">Terms of Service</Link>{" "}
        and{" "}
        <Link href="#" className="hover:text-white/70 underline underline-offset-4">Privacy Policy</Link>.
      </div>
    </div>
  )
}
