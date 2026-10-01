"use client";

import { motion } from "framer-motion";
import { Cookie, Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function CookiesPage() {
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
                <Cookie className="mr-1.5 size-3.5" />
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
              Cookie <span className="text-gradient-flame glow-flame-text">Policy.</span>
            </motion.h1>
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-base text-white/50"
            >
              Last Updated: October 2026. Yes, we use cookies. No, you can't eat them. Here is why we track you.
            </motion.p>
          </div>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="prose prose-invert prose-red mx-auto max-w-none rounded-3xl border border-white/8 bg-white/2 p-8 sm:p-12 backdrop-blur-md glass-card"
          >
            <h2 className="text-2xl font-bold text-white mb-6">1. What Are Cookies?</h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              Cookies are small text files stored on your device when you visit a website. They help us remember your preferences, like the fact that you still haven't completed that task from 3 weeks ago, so we can keep reminding you about it without you having to log in again.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 mt-10">2. How We Use Them</h2>
            <ul className="list-disc pl-6 text-white/70 space-y-3 mb-6">
              <li><strong>Essential Cookies:</strong> We need these to keep you logged in and ensure the app doesn't crash while generating your roast. You cannot disable these.</li>
              <li><strong>Analytics Cookies:</strong> We use these to see how often you open the app, look at your overdue tasks, and immediately close the app again.</li>
              <li><strong>Marketing Cookies:</strong> We might use these to stalk you across the internet with ads reminding you to do your work.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6 mt-10">3. Managing Cookies</h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              You can disable cookies in your browser settings. However, if you do, HabitRoast might forget who you are, which means the AI won't be able to personalize its insults. And really, what's the point of that?
            </p>

          </motion.div>
        </div>
      </main>
    </div>
  );
}
