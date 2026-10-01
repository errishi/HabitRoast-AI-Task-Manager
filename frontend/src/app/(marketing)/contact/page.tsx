"use client";

import { motion } from "framer-motion";
// import { Mail, MessageSquare, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import { Mail, MessageSquare, Send, X } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-[#0a0a0a]">
      {/* Background Effects */}
      <div className="pointer-events-none fixed left-0 top-0 w-200 h-200 rounded-full bg-red-500/3 blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      
      <main className="flex-1 px-4 pt-32 pb-24 sm:pt-40">
        <div className="mx-auto max-w-5xl">
          {/* Header Section */}
          <div className="mb-20 text-center">
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Contact <span className="text-gradient-flame glow-flame-text">Support</span>
            </motion.h1>
            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/50"
            >
              Have a question? Need to report a bug? Or just want to complain that our AI hurt your feelings? We're here for you (mostly).
            </motion.p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Contact Info */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col justify-center space-y-8"
            >
              <div className="rounded-3xl border border-white/8 bg-white/2 p-8 backdrop-blur-md glass-card">
                <h3 className="mb-6 text-xl font-bold text-white">Reach out directly</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/1 text-red-400">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email Us</h4>
                      <p className="mt-1 text-sm text-white/50">For support, billing, or press inquiries.</p>
                      <a href="mailto:hello@habitroast.app" className="mt-2 inline-block text-sm font-medium text-red-400 hover:text-red-300 transition-colors">hello@habitroast.app</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/1 text-red-400">
                      <X className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Twitter / X</h4>
                      <p className="mt-1 text-sm text-white/50">Follow us for public shaming and product updates.</p>
                      <a href="#" className="mt-2 inline-block text-sm font-medium text-red-400 hover:text-red-300 transition-colors">@HabitRoast</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/1 text-red-400">
                      <MessageSquare className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Discord Community</h4>
                      <p className="mt-1 text-sm text-white/50">Join fellow procrastinators in our support server.</p>
                      <a href="#" className="mt-2 inline-block text-sm font-medium text-red-400 hover:text-red-300 transition-colors">Join Server</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="rounded-3xl border border-white/8 bg-white/2 p-8 backdrop-blur-md shadow-2xl shadow-black/50">
                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <Field>
                      <FieldLabel className="text-white/80" htmlFor="firstName">First Name</FieldLabel>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-red-500/50" 
                      />
                    </Field>
                    <Field>
                      <FieldLabel className="text-white/80" htmlFor="lastName">Last Name</FieldLabel>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-red-500/50" 
                      />
                    </Field>
                  </div>
                  
                  <Field>
                    <FieldLabel className="text-white/80" htmlFor="email">Email Address</FieldLabel>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-red-500/50" 
                    />
                  </Field>
                  
                  <Field>
                    <FieldLabel className="text-white/80" htmlFor="message">Message</FieldLabel>
                    <textarea 
                      id="message" 
                      rows={5}
                      placeholder="Tell us how we can help..." 
                      className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/30 outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200" 
                    />
                  </Field>
                  
                  <Button 
                    type="submit" 
                    className="w-full gap-2 bg-gradient-flame border-0 text-white shadow-xl shadow-red-500/20 hover:opacity-90 hover:shadow-red-500/30 transition-all mt-2 h-11"
                  >
                    Send Message
                    <Send className="size-4" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
