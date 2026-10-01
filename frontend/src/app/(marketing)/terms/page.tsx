"use client";

import { motion } from "framer-motion";
import { Scale, Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-[#0a0a0a]">
      <div className="pointer-events-none fixed right-0 top-0 w-200 h-200 rounded-full bg-orange-500/3 blur-[150px] translate-x-1/2 -translate-y-1/2" />
      <div className="pointer-events-none fixed left-0 top-[40%] w-200 h-200 rounded-full bg-red-500/3 blur-[150px] -translate-x-1/2" />

      <main className="flex-1 px-4 pt-32 pb-24 sm:pt-40">
        <div className="mx-auto max-w-4xl">
          {/* Header Section */}
          <div className="mb-16 text-center">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-6 flex justify-center"
            >
              <Badge className="border-red-500/20 bg-red-500/10 text-red-400 px-4 py-1.5 text-sm font-medium">
                <Scale className="mr-1.5 size-3.5" />
                Legal
              </Badge>
            </motion.div>
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-3xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Terms of <span className="text-gradient-flame glow-flame-text">Service.</span>
            </motion.h1>
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-base text-white/50"
            >
              Last Updated: October 2026. By using HabitRoast, you agree to let our AI hurt your feelings for the sake of productivity.
            </motion.p>
          </div>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="prose prose-invert prose-red mx-auto max-w-none rounded-3xl border border-white/8 bg-white/2 p-8 sm:p-12 backdrop-blur-md glass-card"
          >
            <h2 className="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              By accessing and using HabitRoast, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. Go find a nicer, more enabling to-do list app.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 mt-10">2. Description of Service</h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              HabitRoast provides an AI-powered task management service that uses aggressive accountability, sarcasm, and guilt to motivate users. We are not responsible for any emotional distress caused by the AI accurately diagnosing your procrastination habits.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 mt-10">3. User Conduct</h2>
            <ul className="list-disc pl-6 text-white/70 space-y-3 mb-6">
              <li>You agree not to use the service for any unlawful purpose.</li>
              <li>You agree not to attempt to "jailbreak" or prompt-inject the AI into being nice to you. That defeats the whole purpose of the app.</li>
              <li>You are responsible for maintaining the confidentiality of your account password.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6 mt-10">4. Limitation of Liability</h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              HabitRoast shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the service, or from the emotional damage caused by the AI. You signed up for this.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
