"use client";

import { motion } from "framer-motion";
import { Shield, Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function PrivacyPage() {
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
                <Shield className="mr-1.5 size-3.5" />
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
              Privacy <span className="text-gradient-flame glow-flame-text">Policy.</span>
            </motion.h1>
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-base text-white/50"
            >
              Last Updated: October 2026. We need your data to accurately roast your life choices. Here is exactly what we collect.
            </motion.p>
          </div>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="prose prose-invert prose-red mx-auto max-w-none rounded-3xl border border-white/8 bg-white/2 p-8 sm:p-12 backdrop-blur-md glass-card"
          >
            <h2 className="text-2xl font-bold text-white mb-6">1. Information We Collect</h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              When you use HabitRoast, we collect the tasks you input, the deadlines you inevitably miss, and the pathetic excuses you provide. This information is directly fed into our Gemini AI models so it can formulate the perfect insult. We also collect standard usage data (IP address, browser type) because literally every website does.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 mt-10">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-white/70 space-y-3 mb-6">
              <li>To provide the core service (roasting you).</li>
              <li>To train our AI on the complex psychology of why you can't just do your laundry.</li>
              <li>To send you threatening reminder emails when a deadline is approaching.</li>
              <li>To improve our website functionality.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6 mt-10">3. Data Sharing</h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              We do not sell your personal data to third-party marketers. Your shame is between you and the AI. However, we do share necessary data with our AI providers (Google/OpenAI) via API to generate the roasts. If you turn on "Public Shaming" mode, we will automatically tweet your failures. You consented to this.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 mt-10">4. Your Rights</h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              You have the right to request deletion of your data at any time. If you can't handle the heat, you can delete your account from the settings page, and we will wipe your failures from our database within 30 days.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6 mt-10">5. Contact Us</h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact our legal team at <a href="mailto:legal@habitroast.app" className="text-red-400 hover:text-red-300">legal@habitroast.app</a>. 
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
