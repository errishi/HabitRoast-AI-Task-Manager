"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Flame,
  Sparkles,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Zap,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

// Simulated task items for the dashboard preview
const mockTasks = [
  {
    title: "Finish project proposal",
    deadline: "2h ago",
    status: "overdue",
    priority: "high",
  },
  {
    title: "Review pull request #42",
    deadline: "30m ago",
    status: "overdue",
    priority: "medium",
  },
  {
    title: "Update documentation",
    deadline: "In 4h",
    status: "pending",
    priority: "low",
  },
  {
    title: "Deploy v2.1 to staging",
    deadline: "Done",
    status: "complete",
    priority: "high",
  },
];

function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto mt-16 w-full max-w-4xl"
    >
      {/* Glow behind the card */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-b from-red-500/10 via-orange-500/5 to-transparent blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a] shadow-2xl shadow-black/50">
        {/* Window Chrome */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
          <div className="flex gap-1.5">
            <div className="size-3 rounded-full bg-red-500/80" />
            <div className="size-3 rounded-full bg-yellow-500/80" />
            <div className="size-3 rounded-full bg-green-500/80" />
          </div>
          <div className="ml-4 flex-1 rounded-md bg-white/[0.05] px-3 py-1 text-xs text-white/30">
            habitroast.app/dashboard
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_340px]">
          {/* Task List */}
          <div className="border-r border-white/[0.06] p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white/90">Today&apos;s Tasks</h3>
              <Badge className="bg-red-500/10 text-red-400 border-red-500/20 text-xs">
                2 Overdue
              </Badge>
            </div>
            <div className="flex flex-col gap-2">
              {mockTasks.map((task, i) => (
                <motion.div
                  key={task.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all ${task.status === "overdue"
                      ? "bg-red-500/[0.06] border border-red-500/10"
                      : task.status === "complete"
                        ? "bg-green-500/[0.04] border border-green-500/10 opacity-60"
                        : "bg-white/[0.02] border border-white/[0.04]"
                    }`}
                >
                  {task.status === "overdue" ? (
                    <AlertTriangle className="size-4 shrink-0 text-red-400" />
                  ) : task.status === "complete" ? (
                    <CheckCircle2 className="size-4 shrink-0 text-green-400" />
                  ) : (
                    <Clock className="size-4 shrink-0 text-white/30" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm truncate ${task.status === "complete"
                          ? "text-white/40 line-through"
                          : "text-white/80"
                        }`}
                    >
                      {task.title}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 text-xs font-medium ${task.status === "overdue"
                        ? "text-red-400"
                        : task.status === "complete"
                          ? "text-green-400/60"
                          : "text-white/30"
                      }`}
                  >
                    {task.deadline}
                  </span>
                  {task.status === "overdue" && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                      <Flame className="size-3.5 text-orange-400" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* AI Roast Panel */}
          <div className="p-5">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-lg bg-gradient-flame">
                <Zap className="size-3.5 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-white/90">AI Roast</h3>
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-auto flex items-center gap-1"
              >
                <div className="size-1.5 rounded-full bg-red-500" />
                <span className="text-[10px] text-red-400 font-medium">LIVE</span>
              </motion.div>
            </div>

            <div className="rounded-xl border border-red-500/10 bg-red-500/[0.04] p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-flame shadow-lg shadow-red-500/20">
                  <Flame className="size-4 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <RoastTypingAnimation />
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 text-[11px] text-white/30">
              <Sparkles className="size-3" />
              <span>Powered by Google Gemini AI</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function RoastTypingAnimation() {
  const roastText =
    "Oh look, your \"Finish project proposal\" has been overdue for 2 hours. At this rate, your proposal will finish itself before you do. Maybe rename it to \"Eventually get around to it\" — it'd be more honest. 🔥";

  return (
    <motion.p
      className="text-sm leading-relaxed text-red-200/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      {Array.from(roastText).map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 + i * 0.018, duration: 0.01 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16"
    >
      {/* Background Effects */}
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-red-500/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-8 flex justify-center"
        >
          <Badge
            className="border-red-500/20 bg-red-500/10 text-red-400 px-4 py-1.5 text-sm font-medium shadow-lg shadow-red-500/5 backdrop-blur-sm"
          >
            <Sparkles className="mr-1.5 size-3.5" />
            AI-Powered Productivity
          </Badge>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Stop Procrastinating.
          <br />
          <span className="text-gradient-flame glow-flame-text">Or Get Roasted.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg md:text-xl"
        >
          The to-do list that actively shames you for procrastinating. Set goals,
          miss deadlines, and get personalized AI-generated roasts about your
          work ethic.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/auth/signup">
            <Button
              size="lg"
              className="h-12 gap-2 bg-gradient-flame border-0 px-8 text-base font-semibold text-white shadow-xl shadow-red-500/25 transition-all hover:opacity-90 hover:shadow-red-500/30"
              id="hero-get-started-btn"
            >
              <Flame className="size-4" />
              Start Getting Roasted
              <ArrowRight className="size-4" />
            </Button>
          </Link>
          <Link href="#how-it-works">
            <Button
              variant="outline"
              size="lg"
              className="h-12 gap-2 border-white/10 bg-white/[0.03] px-8 text-base font-medium text-white/70 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              id="hero-learn-more-btn"
            >
              See How It Works
            </Button>
          </Link>
        </motion.div>

        {/* Social proof */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-10 flex items-center justify-center gap-6 text-xs text-white/30"
        >
          <div className="flex items-center gap-1.5">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="User avatar"
                  className="size-6 rounded-full border-2 border-[#0a0a0a] object-cover"
                />
              ))}
            </div>
            <span>2,400+ procrastinators roasted</span>
          </div>
          <div className="hidden items-center gap-1 sm:flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                className="size-3.5 fill-orange-400"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span>4.9/5 rating</span>
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <DashboardPreview />
      </div>
    </section>
  );
}
