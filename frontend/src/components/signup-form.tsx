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

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-white/8 bg-white/2 shadow-2xl shadow-black/50 backdrop-blur-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white">Create an account</CardTitle>
          <CardDescription className="text-white/50">
            Enter your email below to start getting roasted
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel className="text-white/80" htmlFor="name">Full Name <span className="text-red-400">*</span></FieldLabel>
                <Input className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-red-500/50" id="name" type="text" placeholder="John Doe" required />
              </Field>
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
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel className="text-white/80" htmlFor="password">Password <span className="text-red-400">*</span></FieldLabel>
                    <Input className="border-white/10 bg-white/5 text-white focus-visible:ring-red-500/50" id="password" type="password" required />
                  </Field>
                  <Field>
                    <FieldLabel className="text-white/80" htmlFor="confirm-password">
                      Confirm Password <span className="text-red-400">*</span>
                    </FieldLabel>
                    <Input className="border-white/10 bg-white/5 text-white focus-visible:ring-red-500/50" id="confirm-password" type="password" required />
                  </Field>
                </Field>
                <FieldDescription className="text-white/40">
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>
              <Field className="mt-4">
                <Button className="w-full bg-gradient-flame border-0 text-white shadow-xl shadow-red-500/20 hover:opacity-90 hover:shadow-red-500/30 transition-all" type="submit">
                  Create Account
                </Button>
                <FieldDescription className="mt-4 text-center text-white/50">
                  Already have an account? <Link href="/auth/login" className="text-red-400 hover:text-red-300 font-medium">Sign in</Link>
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
